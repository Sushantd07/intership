import React, { useState, useEffect, useRef } from 'react';
import { 
  Settings, 
  Save, 
  Edit3, 
  X, 
  Plus, 
  Trash2, 
  Eye, 
  EyeOff,
  Check,
  AlertCircle,
  FileText,
  Phone,
  HelpCircle,
  PlayCircle,
  Building2,
  Type,
  Image,
  Link,
  Bold,
  Italic,
  List,
  ListOrdered
} from 'lucide-react';

const CompanyPageEditor = ({ 
  companyData, 
  onSave, 
  onCancel,
  isVisible = false 
}) => {
  const [editingData, setEditingData] = useState({});
  const [activeTab, setActiveTab] = useState('general');
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [editingTab, setEditingTab] = useState(null);
  const [newTabName, setNewTabName] = useState('');
  const [showAddTabModal, setShowAddTabModal] = useState(false);
  const [complaintContent, setComplaintContent] = useState('');
  const richTextRef = useRef(null);

  // Initialize editing data
  useEffect(() => {
    if (companyData) {
      setEditingData(JSON.parse(JSON.stringify(companyData)));
      setComplaintContent(companyData.complaintContent || '');
    }
  }, [companyData]);

  const handleEditField = (field, value) => {
    setEditingField(field);
    setTempValue(value || '');
  };

  const handleSaveField = () => {
    if (editingField) {
      setEditingData(prev => ({
        ...prev,
        [editingField]: tempValue
      }));
      setEditingField(null);
      setTempValue('');
    }
  };

  const handleCancelEdit = () => {
    setEditingField(null);
    setTempValue('');
  };

  const handleTabEdit = (tabId, newName) => {
    setEditingData(prev => ({
      ...prev,
      tabs: prev.tabs?.map(tab => 
        tab.id === tabId ? { ...tab, label: newName } : tab
      ) || []
    }));
    setEditingTab(null);
  };

  const handleAddTab = () => {
    if (newTabName.trim()) {
      const newTab = {
        id: `tab-${Date.now()}`,
        label: newTabName.trim(),
        icon: FileText,
        content: ''
      };
      setEditingData(prev => ({
        ...prev,
        tabs: [...(prev.tabs || []), newTab]
      }));
      setNewTabName('');
      setShowAddTabModal(false);
    }
  };

  const handleDeleteTab = (tabId) => {
    setEditingData(prev => ({
      ...prev,
      tabs: prev.tabs?.filter(tab => tab.id !== tabId) || []
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const dataToSave = {
        ...editingData,
        complaintContent
      };
      await onSave(dataToSave);
      setShowSaveModal(false);
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  const EditableField = ({ field, value, label, type = 'text', className = '' }) => {
    const isEditing = editingField === field;
    
    return (
      <div className={`${className}`}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        {isEditing ? (
          <div className="flex items-center gap-2">
            {type === 'textarea' ? (
              <textarea
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="flex-1 px-3 py-2 border border-blue-300 rounded-md text-sm resize-none"
                rows={4}
                autoFocus
              />
            ) : (
              <input
                type={type}
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                className="flex-1 px-3 py-2 border border-blue-300 rounded-md text-sm"
                autoFocus
              />
            )}
            <button
              onClick={handleSaveField}
              className="p-2 text-green-600 hover:bg-green-50 rounded-md"
              title="Save"
            >
              <Check className="h-4 w-4" />
            </button>
            <button
              onClick={handleCancelEdit}
              className="p-2 text-red-600 hover:bg-red-50 rounded-md"
              title="Cancel"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 group">
            <div className="flex-1 px-3 py-2 bg-gray-50 rounded-md border border-gray-200">
              {value || 'Not set'}
            </div>
            <button
              onClick={() => handleEditField(field, value)}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
              title="Edit"
            >
              <Edit3 className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    );
  };

  const RichTextEditor = ({ value, onChange, placeholder = "Start typing..." }) => {
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);

    const execCommand = (command, value = null) => {
      document.execCommand(command, false, value);
      richTextRef.current?.focus();
      
      // Update button states
      if (command === 'bold') setIsBold(!isBold);
      if (command === 'italic') setIsItalic(!isItalic);
      if (command === 'underline') setIsUnderline(!isUnderline);
    };

    const handleInput = (e) => {
      const content = e.target.innerHTML;
      onChange(content);
      
      // Update button states based on current selection
      if (document.queryCommandState) {
        setIsBold(document.queryCommandState('bold'));
        setIsItalic(document.queryCommandState('italic'));
        setIsUnderline(document.queryCommandState('underline'));
      }
    };

    return (
      <div className="border border-gray-300 rounded-md">
        {/* Enhanced Toolbar */}
        <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50 flex-wrap">
          {/* Text Formatting */}
          <button
            onClick={() => execCommand('bold')}
            className={`p-2 rounded ${isBold ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`}
            title="Bold (Ctrl+B)"
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            onClick={() => execCommand('italic')}
            className={`p-2 rounded ${isItalic ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`}
            title="Italic (Ctrl+I)"
          >
            <Italic className="h-4 w-4" />
          </button>
          <button
            onClick={() => execCommand('underline')}
            className={`p-2 rounded ${isUnderline ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-200'}`}
            title="Underline (Ctrl+U)"
          >
            <Type className="h-4 w-4" />
          </button>
          
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          
          {/* Lists */}
          <button
            onClick={() => execCommand('insertUnorderedList')}
            className="p-2 rounded hover:bg-gray-200"
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            onClick={() => execCommand('insertOrderedList')}
            className="p-2 rounded hover:bg-gray-200"
            title="Numbered List"
          >
            <ListOrdered className="h-4 w-4" />
          </button>
          
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          
          {/* Links and Images */}
          <button
            onClick={() => {
              const url = prompt('Enter URL:');
              if (url) execCommand('createLink', url);
            }}
            className="p-2 rounded hover:bg-gray-200"
            title="Insert Link"
          >
            <Link className="h-4 w-4" />
          </button>
          
          <div className="w-px h-4 bg-gray-300 mx-1"></div>
          
          {/* Text Alignment */}
          <button
            onClick={() => execCommand('justifyLeft')}
            className="p-2 rounded hover:bg-gray-200"
            title="Align Left"
          >
            <div className="h-4 w-4 flex items-center justify-start">
              <div className="w-3 h-0.5 bg-current"></div>
            </div>
          </button>
          <button
            onClick={() => execCommand('justifyCenter')}
            className="p-2 rounded hover:bg-gray-200"
            title="Align Center"
          >
            <div className="h-4 w-4 flex items-center justify-center">
              <div className="w-3 h-0.5 bg-current"></div>
            </div>
          </button>
          <button
            onClick={() => execCommand('justifyRight')}
            className="p-2 rounded hover:bg-gray-200"
            title="Align Right"
          >
            <div className="h-4 w-4 flex items-center justify-end">
              <div className="w-3 h-0.5 bg-current"></div>
            </div>
          </button>
        </div>
        
        {/* Enhanced Editor */}
        <div
          ref={richTextRef}
          contentEditable
          className="p-4 min-h-[300px] focus:outline-none prose prose-sm max-w-none"
          onInput={handleInput}
          onKeyDown={(e) => {
            // Keyboard shortcuts
            if (e.ctrlKey || e.metaKey) {
              switch (e.key) {
                case 'b':
                  e.preventDefault();
                  execCommand('bold');
                  break;
                case 'i':
                  e.preventDefault();
                  execCommand('italic');
                  break;
                case 'u':
                  e.preventDefault();
                  execCommand('underline');
                  break;
              }
            }
          }}
          dangerouslySetInnerHTML={{ __html: value }}
          placeholder={placeholder}
          style={{ 
            minHeight: '300px',
            lineHeight: '1.6',
            fontSize: '14px'
          }}
        />
        
        {/* Character Count */}
        <div className="px-4 py-2 border-t border-gray-200 bg-gray-50 text-xs text-gray-500">
          Characters: {value.replace(/<[^>]*>/g, '').length} | Words: {value.replace(/<[^>]*>/g, '').trim().split(/\s+/).filter(word => word.length > 0).length}
        </div>
      </div>
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">
            Edit Company Page: {editingData.name}
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSaveModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
            <button
              onClick={onCancel}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              <X className="h-4 w-4" />
              Cancel
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
            <nav className="space-y-2">
              {[
                { id: 'general', label: 'General Info', icon: Building2 },
                { id: 'contact', label: 'Contact Numbers', icon: Phone },
                { id: 'complaints', label: 'Complaint Process', icon: FileText },
                { id: 'tabs', label: 'Manage Tabs', icon: Settings }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* General Info Tab */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  General Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <EditableField
                    field="name"
                    value={editingData.name}
                    label="Company Name"
                  />
                  <EditableField
                    field="founded"
                    value={editingData.founded}
                    label="Founded Year"
                  />
                  <EditableField
                    field="headquarters"
                    value={editingData.headquarters}
                    label="Headquarters"
                  />
                  <EditableField
                    field="rating"
                    value={editingData.rating}
                    label="Rating (0-5)"
                    type="number"
                  />
                  <EditableField
                    field="website"
                    value={editingData.website}
                    label="Website URL"
                  />
                  <EditableField
                    field="phone"
                    value={editingData.phone}
                    label="Main Phone Number"
                  />
                </div>
                
                <EditableField
                  field="description"
                  value={editingData.description}
                  label="Company Description"
                  type="textarea"
                />
              </div>
            )}

            {/* Contact Numbers Tab */}
            {activeTab === 'contact' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Numbers
                </h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    Contact numbers are managed through the admin panel. 
                    Use the "Contact Numbers" section in the main admin panel to edit these.
                  </p>
                </div>
              </div>
            )}

            {/* Complaint Process Tab */}
            {activeTab === 'complaints' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Complaint Redressal Process
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Complaint Process Content
                  </label>
                  <RichTextEditor
                    value={complaintContent}
                    onChange={setComplaintContent}
                    placeholder="Write the complaint redressal process here..."
                  />
                </div>
              </div>
            )}

            {/* Manage Tabs Tab */}
            {activeTab === 'tabs' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Manage Tabs
                  </h3>
                  <button
                    onClick={() => setShowAddTabModal(true)}
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    Add Tab
                  </button>
                </div>
                
                <div className="space-y-3">
                  {(editingData.tabs || []).map((tab) => (
                    <div
                      key={tab.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex items-center gap-3">
                        <tab.icon className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{tab.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setEditingTab(tab.id);
                            setNewTabName(tab.label);
                          }}
                          className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteTab(tab.id)}
                          className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Save Changes Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Save Changes
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to save all changes? This will update the company information.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleSaveChanges}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={() => setShowSaveModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Tab Modal */}
      {showAddTabModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Add New Tab
            </h3>
            <input
              type="text"
              value={newTabName}
              onChange={(e) => setNewTabName(e.target.value)}
              placeholder="Enter tab name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
              autoFocus
            />
            <div className="flex gap-3">
              <button
                onClick={handleAddTab}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Add Tab
              </button>
              <button
                onClick={() => setShowAddTabModal(false)}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyPageEditor; 