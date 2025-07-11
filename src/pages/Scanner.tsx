
import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Scan, Upload, FileText, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

const Scanner = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleScanDocument = () => {
    console.log('Starting document scan...');
  };

  const handleUploadFile = () => {
    console.log('Upload file clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <div className={cn(
        "transition-all duration-300",
        sidebarCollapsed ? "ml-16" : "ml-64"
      )}>
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Document Scanner</h1>
              <p className="text-gray-600 mt-1">Scan and digitize your important documents</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                onClick={handleScanDocument}
              >
                <Scan className="h-4 w-4 mr-2" />
                Start Scan
              </Button>
              <Button 
                variant="outline"
                onClick={handleUploadFile}
                className="cursor-pointer"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload File
              </Button>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scan className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Ready to Scan</h2>
              <p className="text-gray-600 mb-6">Connect your scanner or upload files to get started</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                <Button 
                  onClick={handleScanDocument}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                >
                  <Scan className="h-4 w-4 mr-2" />
                  Scan Document
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleUploadFile}
                  className="cursor-pointer"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload File
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <FileText className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Document Types</h3>
                <p className="text-gray-600 text-sm">Supports PDFs, images, and various document formats</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Eye className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">OCR Processing</h3>
                <p className="text-gray-600 text-sm">Advanced text recognition for searchable documents</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <Upload className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Batch Upload</h3>
                <p className="text-gray-600 text-sm">Process multiple documents at once</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Scanner;
