import React from 'react';
import { AlertCircle, Info, Phone, Mail, Globe, FileText, Search, Shield, ExternalLink } from 'lucide-react';

const ComplaintsTab = ({ complaintsData, loading, error, complaintContent }) => {
  if (loading) {
    return (
      <div className="w-full bg-[#F4F8FF] px-2 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-blue-200 rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-blue-600">Loading complaints data...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-[#F4F8FF] px-2 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-red-200 rounded-2xl shadow-lg p-6">
            <div className="flex items-center text-red-600">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span>Error loading complaints data: {error}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If we have complaintContent but no structured complaintsData, show just the rich text content
  if (!complaintsData && complaintContent) {
    return (
      <div className="w-full bg-[#F4F8FF] px-2 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-blue-200 rounded-2xl shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-extrabold text-blue-800 mb-1">
                Complaint Redressal Process
              </h2>
              <p className="text-xs md:text-sm text-gray-700 mb-2">
                Information about how to file complaints and get redressal
              </p>
            </div>
            
            {/* Rich Text Complaint Content */}
            <div className="mb-6 p-4 border border-blue-100 rounded-lg bg-blue-50">
              <h3 className="font-bold text-blue-700 text-lg mb-3">
                Complaint Redressal Process
              </h3>
              <div 
                className="text-sm text-gray-700 leading-relaxed prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: complaintContent }}
                style={{
                  lineHeight: '1.6',
                  fontSize: '14px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If we have neither complaintsData nor complaintContent
  if (!complaintsData && !complaintContent) {
    return (
      <div className="w-full bg-[#F4F8FF] px-2 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
            <div className="text-center text-gray-500">
              No complaints data available
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F4F8FF] px-2 md:px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-2 lg:gap-4">
        {/* Main Content (Left, 60%) */}
        <div className="flex flex-col gap-3 p-0 md:p-1">
          <div className="bg-white border border-blue-200 rounded-2xl shadow-lg p-4 md:p-6 flex flex-col gap-4">
            {/* Main Heading */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-blue-800 mb-1">
                {complaintsData.mainHeading?.title || complaintsData.tabTitle}
              </h2>
              <p className="text-xs md:text-sm text-gray-700 mb-2">
                {complaintsData.mainHeading?.description || complaintsData.tabDescription}
              </p>
            </div>

            {/* Rich Text Complaint Content */}
            {complaintContent && (
              <div className="mb-6 p-4 border border-blue-100 rounded-lg bg-blue-50">
                <h3 className="font-bold text-blue-700 text-lg mb-3">
                  Complaint Redressal Process
                </h3>
                <div 
                  className="text-sm text-gray-700 leading-relaxed prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: complaintContent }}
                  style={{
                    lineHeight: '1.6',
                    fontSize: '14px'
                  }}
                />
              </div>
            )}

            {/* Complaint Methods */}
            {complaintsData.complaintMethods && (
              <div>
                <h3 className="font-bold text-blue-700 text-lg mb-3">
                  {complaintsData.complaintMethods.heading?.text}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {complaintsData.complaintMethods.heading?.subText}
                </p>
                
                {complaintsData.complaintMethods.methods?.map((method, index) => (
                  <div key={index} className="mb-6 p-4 border border-blue-100 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Method {method.methodNumber}: {method.title}
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">{method.description}</p>
                    
                    {/* Steps */}
                    {method.steps?.map((step, stepIndex) => (
                      <div key={stepIndex} className="mb-3 ml-4">
                        <h5 className="font-medium text-blue-700 mb-1">
                          Step {step.stepNumber}: {step.title}
                        </h5>
                        <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                        {step.details?.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-sm text-gray-700 ml-4 mb-1">
                            • {detail}
                          </div>
                        ))}
                      </div>
                    ))}
                    
                    {/* Contact Info */}
                    {method.contactInfo && (
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                        <h5 className="font-medium text-blue-800 mb-2">Contact Information:</h5>
                        {method.contactInfo.phoneNumbers?.map((phone, phoneIndex) => (
                          <div key={phoneIndex} className="flex items-center gap-2 text-sm mb-1">
                            <Phone className="w-4 h-4 text-blue-600" />
                            <span className="font-mono">{phone}</span>
                          </div>
                        ))}
                        {method.contactInfo.email && (
                          <div className="flex items-center gap-2 text-sm mb-1">
                            <Mail className="w-4 h-4 text-blue-600" />
                            <a href={`mailto:${method.contactInfo.email}`} className="text-blue-700 underline">
                              {method.contactInfo.email}
                            </a>
                          </div>
                        )}
                        {method.contactInfo.website && (
                          <div className="flex items-center gap-2 text-sm mb-1">
                            <Globe className="w-4 h-4 text-blue-600" />
                            <a href={method.contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                              Visit Website
                            </a>
                          </div>
                        )}
                        {method.contactInfo.workingHours && (
                          <div className="text-sm text-gray-600">
                            Working Hours: {method.contactInfo.workingHours}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Escalation Levels */}
            {complaintsData.escalationLevels && (
              <div>
                <h3 className="font-bold text-blue-700 text-lg mb-3">
                  {complaintsData.escalationLevels.heading?.text}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {complaintsData.escalationLevels.heading?.subText}
                </p>
                
                {complaintsData.escalationLevels.levels?.map((level, index) => (
                  <div key={index} className="mb-6 p-4 border border-blue-100 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Level {level.levelNumber}: {level.title}
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">{level.description}</p>
                    
                    {/* Contact Details */}
                    {level.contactDetails && (
                      <div className="mb-3 p-3 bg-blue-50 rounded-lg">
                        <h5 className="font-medium text-blue-800 mb-2">{level.contactDetails.department}</h5>
                        {level.contactDetails.phoneNumbers?.map((phone, phoneIndex) => (
                          <div key={phoneIndex} className="flex items-center gap-2 text-sm mb-1">
                            <Phone className="w-4 h-4 text-blue-600" />
                            <span className="font-mono">{phone}</span>
                          </div>
                        ))}
                        {level.contactDetails.email && (
                          <div className="flex items-center gap-2 text-sm mb-1">
                            <Mail className="w-4 h-4 text-blue-600" />
                            <a href={`mailto:${level.contactDetails.email}`} className="text-blue-700 underline">
                              {level.contactDetails.email}
                            </a>
                          </div>
                        )}
                        {level.contactDetails.workingHours && (
                          <div className="text-sm text-gray-600 mb-1">
                            Working Hours: {level.contactDetails.workingHours}
                          </div>
                        )}
                        {level.contactDetails.address && (
                          <div className="text-sm text-gray-600">
                            Address: {level.contactDetails.address}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="text-sm text-gray-600">
                      <strong>Resolution Timeline:</strong> {level.resolutionTimeline}
                    </div>
                    {level.escalationNote && (
                      <div className="text-sm text-blue-600 mt-2">
                        {level.escalationNote}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Regional Nodal Officers */}
            {complaintsData.regionalNodalOfficers && (
              <div>
                <h3 className="font-bold text-blue-700 text-lg mb-3">
                  {complaintsData.regionalNodalOfficers.heading?.text}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {complaintsData.regionalNodalOfficers.description}
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-blue-200 rounded-lg">
                    <thead className="bg-blue-50">
                      <tr>
                        {complaintsData.regionalNodalOfficers.table?.headers?.map((header, index) => (
                          <th key={index} className="px-4 py-2 text-left text-sm font-medium text-blue-800 border-b border-blue-200">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {complaintsData.regionalNodalOfficers.table?.rows?.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                          <td className="px-4 py-2 text-sm border-b border-blue-200">{row.region}</td>
                          <td className="px-4 py-2 text-sm border-b border-blue-200">{row.statesCovered}</td>
                          <td className="px-4 py-2 text-sm border-b border-blue-200">
                            <a href={`mailto:${row.emailId}`} className="text-blue-700 underline">
                              {row.emailId}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* RBI Banking Ombudsman */}
            {complaintsData.rbiOmbudsman && (
              <div>
                <h3 className="font-bold text-blue-700 text-lg mb-3">
                  {complaintsData.rbiOmbudsman.heading?.text}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {complaintsData.rbiOmbudsman.description}
                </p>
                
                {complaintsData.rbiOmbudsman.portalInfo && (
                  <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Portal Information:</h4>
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <a href={complaintsData.rbiOmbudsman.portalInfo.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                        RBI CMS Portal
                      </a>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Cost: {complaintsData.rbiOmbudsman.portalInfo.cost}
                    </div>
                    <div className="text-sm text-gray-600">
                      Resolution Timeline: {complaintsData.rbiOmbudsman.portalInfo.resolutionTimeline}
                    </div>
                  </div>
                )}
                
                {complaintsData.rbiOmbudsman.requirements && (
                  <div className="mb-4">
                    <h4 className="font-medium text-blue-800 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      {complaintsData.rbiOmbudsman.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Best Practices */}
            {complaintsData.bestPractices && (
              <div>
                <h3 className="font-bold text-blue-700 text-lg mb-3">
                  {complaintsData.bestPractices.heading?.text}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {complaintsData.bestPractices.subtitle}
                </p>
                
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                  {complaintsData.bestPractices.practices?.map((practice, index) => (
                    <li key={index}>{practice}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQs */}
            {complaintsData.faqs && (
              <div>
                <h3 className="font-bold text-blue-700 text-lg mb-3">
                  {complaintsData.faqs.heading?.text}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {complaintsData.faqs.heading?.subText}
                </p>
                
                {complaintsData.faqs.questions?.map((faq, index) => (
                  <div key={index} className="mb-4 p-4 border border-blue-100 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Q: {faq.question}</h4>
                    <p className="text-sm text-gray-700">A: {faq.answer}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Important Links */}
            {complaintsData.importantLinks && complaintsData.importantLinks.length > 0 && (
              <div>
                <h3 className="font-bold text-blue-700 text-lg mb-3">Important Links</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {complaintsData.importantLinks.map((link, index) => (
                    <div key={index} className="p-4 border border-blue-100 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${link.iconBg || 'bg-blue-500'}`}>
                          {link.icon === 'FileText' && <FileText className="w-4 h-4 text-white" />}
                          {link.icon === 'Search' && <Search className="w-4 h-4 text-white" />}
                          {link.icon === 'Shield' && <Shield className="w-4 h-4 text-white" />}
                          {link.icon === 'ExternalLink' && <ExternalLink className="w-4 h-4 text-white" />}
                        </div>
                        <h4 className="font-medium text-blue-800">{link.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-700 underline text-sm flex items-center gap-1"
                      >
                        Visit Link <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents Required */}
            {complaintsData.documentsRequired && (
              <div>
                <h3 className="font-bold text-blue-700 text-lg mb-3">
                  {complaintsData.documentsRequired.heading?.text}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {complaintsData.documentsRequired.heading?.subText}
                </p>
                
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                  {complaintsData.documentsRequired.documents?.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Resolution Timeline */}
            {complaintsData.resolutionTimeline && (
              <div>
                <h3 className="font-bold text-blue-700 text-lg mb-3">
                  {complaintsData.resolutionTimeline.heading?.text}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {complaintsData.resolutionTimeline.heading?.subText}
                </p>
                
                <div className="space-y-3">
                  {complaintsData.resolutionTimeline.timelines?.map((timeline, index) => (
                    <div key={index} className="p-4 border border-blue-100 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-blue-800">{timeline.level}</h4>
                        <span className="text-sm font-semibold text-green-600">{timeline.days}</span>
                      </div>
                      <p className="text-sm text-gray-700">{timeline.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Note */}
            {complaintsData.note && (
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Info className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium text-yellow-800">Important Note</span>
                </div>
                <p className="text-sm text-yellow-700">{complaintsData.note}</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar (Right, 40%) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 flex flex-col gap-3">
            {/* Quick Links Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 max-w-[320px] w-full overflow-hidden">
              <div className="bg-blue-700 rounded-t px-3 py-2">
                <h3 className="text-white text-base font-bold text-center">Quick Actions</h3>
              </div>
              <div className="p-4">
                {complaintsData.importantLinks?.slice(0, 3).map((link, index) => (
                  <div key={index} className="mb-3 last:mb-0">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-700 hover:text-blue-800 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {link.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 max-w-[320px] w-full overflow-hidden">
              <div className="bg-green-700 rounded-t px-3 py-2">
                <h3 className="text-white text-base font-bold text-center">Emergency Contact</h3>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-700 mb-2">
                  For urgent complaints, contact customer care immediately:
                </div>
                {complaintsData.escalationLevels?.levels?.[0]?.contactDetails?.phoneNumbers?.map((phone, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm mb-1">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span className="font-mono">{phone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ComplaintsTab; 