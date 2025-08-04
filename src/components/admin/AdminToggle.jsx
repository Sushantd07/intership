import React, { useState } from 'react';
import { Settings, Save, X, Edit3, Eye } from 'lucide-react';
import CompanyPageEditor from './CompanyPageEditor';

const AdminToggle = ({ companyData, onSave, onInlineSave, isAdminMode, setIsAdminMode }) => {
  const [showEditor, setShowEditor] = useState(false);
  const [showInlineMode, setShowInlineMode] = useState(false);

  const handleSave = async (updatedData) => {
    try {
      await onSave(updatedData);
      setShowEditor(false);
      setIsAdminMode(false);
    } catch (error) {
      console.error('Error saving company data:', error);
    }
  };

  const handleInlineSave = async (field, value) => {
    try {
      if (onInlineSave) {
        await onInlineSave(field, value);
      }
    } catch (error) {
      console.error('Error saving inline edit:', error);
    }
  };

  return (
    <>
      {/* Admin Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <div className="flex items-center gap-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2">
          {!isAdminMode ? (
            <button
              onClick={() => setIsAdminMode(true)}
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              <Settings className="h-4 w-4" />
              Admin Mode
            </button>
          ) : (
            <>
              <button
                onClick={() => setShowInlineMode(!showInlineMode)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors ${
                  showInlineMode 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-yellow-600 text-white hover:bg-yellow-700'
                }`}
              >
                <Eye className="h-4 w-4" />
                {showInlineMode ? 'Inline Active' : 'Inline Edit'}
              </button>
              <button
                onClick={() => setShowEditor(true)}
                className="flex items-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 transition-colors"
              >
                <Edit3 className="h-4 w-4" />
                Full Editor
              </button>
              <button
                onClick={() => {
                  setIsAdminMode(false);
                  setShowInlineMode(false);
                }}
                className="flex items-center gap-2 px-3 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                <X className="h-4 w-4" />
                Exit
              </button>
            </>
          )}
        </div>
      </div>

      {/* Admin Mode Overlay */}
      {isAdminMode && (
        <div className="fixed inset-0 bg-black/20 z-40 pointer-events-none">
          <div className="absolute top-20 left-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 pointer-events-auto max-w-sm">
            <h3 className="font-semibold text-gray-900 mb-3">Admin Mode Active</h3>
            <div className="space-y-2 text-sm text-gray-600">
              {showInlineMode ? (
                <>
                  <p className="text-green-600 font-medium">• Inline Editing Mode</p>
                  <p>• Click on any text to edit directly</p>
                  <p>• Press Enter to save, Escape to cancel</p>
                  <p>• Changes save automatically</p>
                </>
              ) : (
                <>
                  <p>• Click "Inline Edit" to edit text directly on page</p>
                  <p>• Click "Full Editor" to open the complete editor</p>
                  <p>• All changes are saved automatically</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Company Page Editor */}
      <CompanyPageEditor
        companyData={companyData}
        onSave={handleSave}
        onCancel={() => setShowEditor(false)}
        isVisible={showEditor}
      />
    </>
  );
};

export default AdminToggle; 