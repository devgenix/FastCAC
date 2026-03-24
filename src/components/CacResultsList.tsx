import React, { useState } from 'react';
import { CacCompany } from '@/lib/cac-search';
import { Search, Info, CheckCircle, XCircle, Clock, Zap } from './Icons';
import { getTaxIdAction } from '@/app/actions';

interface CacResultsListProps {
  results: CacCompany[];
  isLoading: boolean;
}

export function CacResultsList({ results, isLoading }: CacResultsListProps) {
  const [selectedCompany, setSelectedCompany] = useState<CacCompany | null>(
    results.length > 0 ? results[0] : null
  );
  
  // Cache for TINs: { [companyId]: taxId }
  const [tinCache, setTinCache] = useState<Record<number, string>>({});
  const [isTaxLoading, setIsTaxLoading] = useState(false);
  const [taxError, setTaxError] = useState<string | null>(null);

  // Derive taxId for the currently selected company from the cache
  const taxId = selectedCompany?.companyId ? tinCache[selectedCompany.companyId] : null;

  // Update selected company if results change and nothing is selected
  React.useEffect(() => {
    if (results.length > 0 && !selectedCompany) {
      setSelectedCompany(results[0]);
    }
  }, [results, selectedCompany]);

  const handleGetTaxId = async () => {
    if (!selectedCompany || !selectedCompany.companyId || !selectedCompany.rcNumber) return;
    if (taxId) return; // Already cached
    
    setIsTaxLoading(true);
    setTaxError(null);
    
    try {
      const result = await getTaxIdAction(
        selectedCompany.companyId, 
        selectedCompany.rcNumber, 
        selectedCompany.classificationId
      );
      
      if (result.success && result.data && result.data.data) {
        const incomingData = result.data.data;
        let fetchedTin = '';
        
        if (typeof incomingData === 'object' && incomingData !== null && 'tax_id' in incomingData) {
          fetchedTin = String(incomingData.tax_id);
        } else if (typeof incomingData === 'string') {
          fetchedTin = incomingData;
        }

        if (fetchedTin) {
          setTinCache(prev => ({ ...prev, [selectedCompany.companyId!]: fetchedTin }));
        } else {
          setTaxError("Tax ID format not recognized. Please try again later.");
        }
      } else {
        setTaxError(result.message || "Failed to retrieve Tax ID. It might not be generated yet.");
      }
    } catch (err) {
      setTaxError("An error occurred while fetching the Tax ID.");
    } finally {
      setIsTaxLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toUpperCase()) {
      case 'ACTIVE':
        return <CheckCircle className="w-4 h-4 text-primary" />;
      case 'INACTIVE':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'UNDER_REGISTRATION':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <Info className="w-4 h-4 text-on-surface/40" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toUpperCase()) {
      case 'ACTIVE':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'INACTIVE':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'UNDER_REGISTRATION':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      default:
        return 'bg-on-surface/5 text-on-surface/50 border-outline/10';
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 animate-in fade-in duration-500">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-on-surface/50 font-body">Searching CAC database...</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 animate-in fade-in duration-500 text-center">
        <div className="w-16 h-16 bg-on-surface/5 rounded-full flex items-center justify-center">
          <Search className="w-8 h-8 text-on-surface/20" />
        </div>
        <div className="max-w-md">
          <h3 className="text-xl font-headline font-bold mb-2">No results found</h3>
          <p className="text-on-surface/50 font-body">
            We couldn't find any registered businesses matching your search. This name might be available for registration!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Results List */}
      <div className="flex-1 lg:max-w-md">
        <div className="bg-white dark:bg-surface-container border border-outline/10 rounded-2xl overflow-hidden shadow-sm">
          <div className="divide-y divide-outline/5 max-h-[600px] overflow-y-auto no-scrollbar">
            {results.map((company, index) => (
              <button
                key={`${company.rcNumber}-${index}`}
                onClick={() => setSelectedCompany(company)}
                className={`w-full text-left p-4 flex items-center gap-4 transition-all hover:bg-on-surface/5 ${
                  selectedCompany?.approvedName === company.approvedName
                    ? 'bg-primary/5 border-l-4 border-l-primary'
                    : 'border-l-4 border-l-transparent'
                }`}
              >
                <div className="shrink-0">{getStatusIcon(company.status)}</div>
                <div className="min-w-0 flex-1">
                  <h4 className={`text-sm font-headline font-bold truncate ${
                    selectedCompany?.approvedName === company.approvedName ? 'text-primary' : ''
                  }`}>
                    {company.approvedName}
                    <span className="ml-2 text-[10px] text-on-surface/40">
                      [{company.rcNumber || 'PENDING'}]
                    </span>
                  </h4>
                </div>
              </button>
            ))}
          </div>
          <div className="p-4 bg-on-surface/5 border-t border-outline/5 text-[10px] font-body text-on-surface/40 flex justify-between">
            <span>Showing {results.length} results</span>
            <span>Data provided by CAC Nigeria</span>
          </div>
        </div>
      </div>

      {/* Details View */}
      <div className="flex-[1.5] lg:sticky lg:top-24 h-fit">
        {selectedCompany ? (
          <div className="bg-white dark:bg-surface-container border border-outline/10 rounded-2xl p-8 shadow-sm space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-4">
              <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-headline font-black uppercase tracking-wider border ${getStatusColor(selectedCompany.status)}`}>
                {selectedCompany.classificationName}
              </div>
              <h3 className="text-3xl lg:text-4xl font-headline font-black tracking-tight text-primary leading-tight uppercase">
                {selectedCompany.approvedName}
              </h3>
              <p className="text-lg font-body text-on-surface/60">
                RC - {selectedCompany.rcNumber || 'Under Registration'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-outline/5">
              <div className="space-y-1">
                <p className="text-[10px] font-headline font-bold text-on-surface/40 uppercase tracking-widest">Date of Registration</p>
                <p className="font-body text-on-surface">
                  {new Date(selectedCompany.companyRegistrationDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-headline font-bold text-on-surface/40 uppercase tracking-widest">Status</p>
                <div className="flex items-center gap-2">
                   <div className={`px-2 py-0.5 rounded-md text-[10px] font-headline font-bold uppercase border ${getStatusColor(selectedCompany.status)}`}>
                    {selectedCompany.status.replace(/_/g, ' ')}
                  </div>
                  {selectedCompany.status.toUpperCase() === 'INACTIVE' && (
                    <span className="text-[10px] text-red-500 italic">(Visit CAC and update your status)</span>
                  )}
                </div>
              </div>
              <div className="col-span-full space-y-1">
                <p className="text-[10px] font-headline font-bold text-on-surface/40 uppercase tracking-widest">Nature of Business</p>
                <p className="font-body text-on-surface leading-relaxed">
                  {selectedCompany.natureOfBusiness || 'Information not provided'}
                </p>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              {taxId ? (
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 animate-in zoom-in-95 duration-500">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-xs font-headline font-black uppercase tracking-widest text-primary">Official Tax ID (TIN)</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-3xl font-headline font-black tracking-tight text-on-surface select-all">
                      {taxId}
                    </p>
                    <button 
                      onClick={() => navigator.clipboard.writeText(taxId)}
                      className="p-2 hover:bg-primary/10 rounded-lg text-primary transition-colors text-[10px] font-headline font-bold uppercase"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <button 
                    onClick={handleGetTaxId}
                    disabled={isTaxLoading || !selectedCompany.companyId || !selectedCompany.rcNumber}
                    className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-xl font-headline font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isTaxLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Fetching TIN...
                      </>
                    ) : (
                      <>Get Tax ID (TIN)</>
                    )}
                  </button>
                  
                  {taxError && (
                    <p className="text-xs font-body text-red-500 animate-in fade-in slide-in-from-top-1">
                      {taxError}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="h-full border-2 border-dashed border-outline/10 rounded-2xl flex items-center justify-center p-12 text-center">
            <div className="max-w-xs space-y-3">
              <div className="w-12 h-12 bg-on-surface/5 rounded-full flex items-center justify-center mx-auto opacity-50">
                <Info className="w-6 h-6 text-on-surface/40" />
              </div>
              <p className="text-on-surface/40 font-body text-sm italic">
                Select a business from the list to view its official registration details and nature of business.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
