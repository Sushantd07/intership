import React, { useState, useRef, useEffect } from 'react';
import SnameMap from '../assets/lastMap.svg?react';
import { MapPin, ArrowRight, Users, Shield, Phone, Lock, Unlock } from 'lucide-react';

const statesData = [
	{
		id: 'maharashtra',
		svgId: 'INMH',
		name: 'Maharashtra',
		image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
		info: [
			{ label: 'CM Helpline', value: '1800-222-111' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '101' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'delhi',
		svgId: 'Delhi',
		name: 'Delhi',
		image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300&h=200&fit=crop',
		info: [
			{ label: 'CM Helpline', value: '1800-110-001' },
			{ label: 'Electricity', value: '19123' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '101' },
			{ label: 'Ambulance', value: '102' }
		]
	},
	{
		id: 'karnataka',
		svgId: 'Karnataka',
		name: 'Karnataka',
		image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
		info: [
			{ label: 'CM Helpline', value: '1800-425-9339' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '101' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'tamil_nadu',
		svgId: 'Tamil_Nadu',
		name: 'Tamil Nadu',
		image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
		info: [
			{ label: 'CM Helpline', value: '1800-425-0111' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '101' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'andhra_pradesh',
		svgId: 'Andhra_Pradesh',
		name: 'Andhra Pradesh',
		image: 'https://images.unsplash.com/photo-1583663848692-6b3f4764cf0b?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1902' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '1100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'arunachal_pradesh',
		svgId: 'Arunachal_Pradesh',
		name: 'Arunachal Pradesh',
		image: 'https://images.unsplash.com/photo-1625121342044-b3b94fd3f3b9?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '155250' },
			{ label: 'Electricity', value: '0370-2290065' },
			{ label: 'Police', value: '1100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'assam',
		svgId: 'Assam',
		name: 'Assam',
		image: 'https://images.unsplash.com/photo-1595847135932-27cba8e90d2b?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1100' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'bihar',
		svgId: 'Bihar',
		name: 'Bihar',
		image: 'https://images.unsplash.com/photo-1598003789764-2a6d5272ab6c?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1905' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'chhattisgarh',
		svgId: 'Chhattisgarh',
		name: 'Chhattisgarh',
		image: 'https://images.unsplash.com/photo-1620733100472-27c87b8e76ae?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1100' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'goa',
		svgId: 'Goa',
		name: 'Goa',
		image: 'https://images.unsplash.com/photo-1601275802430-4b7b8d7932c0?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '155250' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'gujarat',
		svgId: 'Gujarat',
		name: 'Gujarat',
		image: 'https://images.unsplash.com/photo-1582721052784-4cc5df1944ec?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1100' },
			{ label: 'Electricity', value: '1800-233-3003' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'haryana',
		svgId: 'Haryana',
		name: 'Haryana',
		image: 'https://images.unsplash.com/photo-1646792006724-3cf61c56d93f?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1100' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'himachal_pradesh',
		svgId: 'Himachal_Pradesh',
		name: 'Himachal Pradesh',
		image: 'https://images.unsplash.com/photo-1548013146-72479768bada?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1100' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'jharkhand',
		svgId: 'Jharkhand',
		name: 'Jharkhand',
		image: 'https://images.unsplash.com/photo-1580137189272-c9379b0f6d0a?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '181' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'kerala',
		svgId: 'Kerala',
		name: 'Kerala',
		image: 'https://images.unsplash.com/photo-1628164603882-80ae51cd74cc?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '155300' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'madhya_pradesh',
		svgId: 'Madhya_Pradesh',
		name: 'Madhya Pradesh',
		image: 'https://images.unsplash.com/photo-1603701973586-2c2acacdb138?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '181' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'manipur',
		svgId: 'Manipur',
		name: 'Manipur',
		image: 'https://images.unsplash.com/photo-1582223151283-877dc7b2b8aa?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '181' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'meghalaya',
		svgId: 'Meghalaya',
		name: 'Meghalaya',
		image: 'https://images.unsplash.com/photo-1608710449164-4a7cf6ea45fb?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '14410' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'mizoram',
		svgId: 'Mizoram',
		name: 'Mizoram',
		image: 'https://images.unsplash.com/photo-1616052488425-2a785b42abbb?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1098' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'nagaland',
		svgId: 'Nagaland',
		name: 'Nagaland',
		image: 'https://images.unsplash.com/photo-1617032023622-3859651d4623?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '112' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'odisha',
		svgId: 'Odisha',
		name: 'Odisha',
		image: 'https://images.unsplash.com/photo-1574169207510-8c4f5e6ffeb6?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '155335' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'punjab',
		svgId: 'Punjab',
		name: 'Punjab',
		image: 'https://images.unsplash.com/photo-1606813817202-7ff21d7d011a?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1100' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'rajasthan',
		svgId: 'Rajasthan',
		name: 'Rajasthan',
		image: 'https://images.unsplash.com/photo-1585155777343-92a6e7422db5?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '181' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'sikkim',
		svgId: 'Sikkim',
		name: 'Sikkim',
		image: 'https://images.unsplash.com/photo-1624110052441-d1f7d01f55cb?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '181' },
			{ label: 'Electricity', value: '03592-202233' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'telangana',
		svgId: 'Telangana',
		name: 'Telangana',
		image: 'https://images.unsplash.com/photo-1600346025101-7c210c0cb2d4?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1902' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'tripura',
		svgId: 'Tripura',
		name: 'Tripura',
		image: 'https://images.unsplash.com/photo-1632445487276-d75db8579c8c?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1905' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'uttar_pradesh',
		svgId: 'Uttar_Pradesh',
		name: 'Uttar Pradesh',
		image: 'https://images.unsplash.com/photo-1594810909394-eae57a1808d5?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1076' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'uttarakhand',
		svgId: 'Uttarakhand',
		name: 'Uttarakhand',
		image: 'https://images.unsplash.com/photo-1612110806494-bc2b1e75c9cc?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1905' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},
	{
		id: 'west_bengal',
		svgId: 'West_Bengal',
		name: 'West Bengal',
		image: 'https://images.unsplash.com/photo-1606464714196-c4cc6615f4fa?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '100' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '100' },
			{ label: 'Ambulance', value: '108' }
		]
	},

	// Union Territories
	{
		id: 'chandigarh',
		svgId: 'Chandigarh',
		name: 'Chandigarh',
		image: 'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '112' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '101' },
			{ label: 'Ambulance', value: '102' }
		]
	},
	{
		id: 'jammu_kashmir',
		svgId: 'Jammu_and_Kashmir_disp',
		name: 'Jammu & Kashmir',
		image: 'https://images.unsplash.com/photo-1570696164395-426b7f3d5a70?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '155255' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '101' },
			{ label: 'Ambulance', value: '102' }
		]
	},
	{
		id: 'ladakh',
		svgId: 'Ladakh_disp',
		name: 'Ladakh',
		image: 'https://images.unsplash.com/photo-1623160937084-9a4c55dc5986?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '100' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '101' },
			{ label: 'Ambulance', value: '102' }
		]
	},
	{
		id: 'andaman_nicobar',
		svgId: 'Andaman_and_Nicobar_Islands',
		name: 'Andaman & Nicobar',
		image: 'https://images.unsplash.com/photo-1608806307311-26c2c3f7926a?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '112' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '101' },
			{ label: 'Ambulance', value: '102' }
		]
	},
	{
		id: 'puducherry',
		svgId: 'Puducherry',
		name: 'Puducherry',
		image: 'https://images.unsplash.com/photo-1601034874029-3c04643f9e8f?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '1031' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '101' },
			{ label: 'Ambulance', value: '102' }
		]
	},
	{
		id: 'dadra_nagar_haveli',
		svgId: 'Dadra_and_Nagar_Haveli_and_Daman_and_Diu',
		name: 'Dadra & Nagar Haveli',
		image: 'https://images.unsplash.com/photo-1543832977-85db68f1b4df?fit=crop&w=300&h=200',
		info: [
			{ label: 'CM Helpline', value: '100' },
			{ label: 'Electricity', value: '1912' },
			{ label: 'Police', value: '100' },
			{ label: 'Fire', value: '101' },
			{ label: 'Ambulance', value: '102' }
		]
	}
];

const stats = [
  { icon: MapPin, label: 'States Covered', value: '28+' },
  { icon: Shield, label: 'Emergency Numbers', value: '500+' },
  { icon: Phone, label: 'Verified Numbers', value: '2000+' },
  { icon: Users, label: 'Daily Searches', value: '50K+' }
];

// Helper: Map svgId to state id
const svgIdToStateId = Object.fromEntries(statesData.map(s => [s.svgId, s.id]));

// SVG Map Wrapper to inject hover handlers
const InteractiveMap = ({ onStateHover, onStateLeave, onStateClick, hoveredState, clickedState }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const node = mapRef.current;
    
    // Remove existing listeners
    if (node.__listenersAttached) {
      Object.keys(svgIdToStateId).forEach(svgId => {
        const region = node.querySelector(`#${svgId}`);
        if (region) {
          region.removeEventListener('mouseenter', node[`__mouseenter_${svgId}`]);
          region.removeEventListener('mouseleave', node[`__mouseleave_${svgId}`]);
          region.removeEventListener('click', node[`__click_${svgId}`]);
        }
      });
    }

    // Attach new listeners
    Object.keys(svgIdToStateId).forEach(svgId => {
      const region = node.querySelector(`#${svgId}`);
      if (region) {
        region.style.cursor = 'pointer';
        region.style.transition = 'all 0.3s ease';
        
        // Store function references for cleanup
        const mouseEnterHandler = () => {
          const stateId = svgIdToStateId[svgId];
          console.log('Hovered:', stateId);
          onStateHover(stateId);
          
          // Add hover visual effect (only if not clicked)
          if (clickedState !== stateId) {
            region.style.fill = '#d1451a'; // Dark orange
            region.style.stroke = '#a34700';
            region.style.strokeWidth = '3';
            region.style.filter = 'drop-shadow(0 0 8px rgba(209, 69, 26, 0.6))';
          }
        };
        
        const mouseLeaveHandler = () => {
          const stateId = svgIdToStateId[svgId];
          onStateLeave();
          
          // Remove hover visual effect (only if not clicked)
          if (clickedState !== stateId) {
            region.style.fill = '#f79647';
            region.style.stroke = '#a34700';
            region.style.strokeWidth = '1';
            region.style.filter = 'none';
          }
        };

        const clickHandler = () => {
          const stateId = svgIdToStateId[svgId];
          console.log('Clicked:', stateId);
          onStateClick(stateId);
          
          // Visual feedback for click - dark colors
          region.style.fill = '#8b4513'; // Dark brown
          region.style.stroke = '#654321';
          region.style.strokeWidth = '4';
          region.style.filter = 'drop-shadow(0 0 12px rgba(139, 69, 19, 0.8))';
        };

        // Store references for cleanup
        node[`__mouseenter_${svgId}`] = mouseEnterHandler;
        node[`__mouseleave_${svgId}`] = mouseLeaveHandler;
        node[`__click_${svgId}`] = clickHandler;
        
        region.addEventListener('mouseenter', mouseEnterHandler);
        region.addEventListener('mouseleave', mouseLeaveHandler);
        region.addEventListener('click', clickHandler);
      }
    });

    node.__listenersAttached = true;

    // Cleanup function
    return () => {
      if (node.__listenersAttached) {
        Object.keys(svgIdToStateId).forEach(svgId => {
          const region = node.querySelector(`#${svgId}`);
          if (region && node[`__mouseenter_${svgId}`]) {
            region.removeEventListener('mouseenter', node[`__mouseenter_${svgId}`]);
            region.removeEventListener('mouseleave', node[`__mouseleave_${svgId}`]);
            region.removeEventListener('click', node[`__click_${svgId}`]);
          }
        });
      }
    };
  }, [onStateHover, onStateLeave, onStateClick, clickedState]);

  // Reset all states to default appearance
  useEffect(() => {
    if (!mapRef.current) return;
    
    const node = mapRef.current;
    Object.keys(svgIdToStateId).forEach(svgId => {
      const region = node.querySelector(`#${svgId}`);
      if (region) {
        region.style.fill = '#f79647';
        region.style.stroke = '#a34700';
        region.style.strokeWidth = '1';
        region.style.filter = 'none';
      }
    });
  }, []);

  return (
    <SnameMap
      ref={mapRef}
      style={{ 
        width: '100%', 
        maxWidth: 530, 
        maxHeight: 550, 
        objectFit: 'contain', 
        display: 'block',
        filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))'
      }}
    />
  );
};

const StatewiseSection = () => {
  const [hoveredState, setHoveredState] = useState(null);
  const [clickedState, setClickedState] = useState(null);
  const [isTableLocked, setIsTableLocked] = useState(false);
  
  // Determine which state data to show
  const activeState = clickedState || hoveredState;
  const activeStateData = activeState ? statesData.find(s => s.id === activeState) : null;

  const handleStateHover = (stateId) => {
    setHoveredState(stateId);
  };

  const handleStateLeave = () => {
    if (!isTableLocked) {
      setHoveredState(null);
    }
  };

  const handleStateClick = (stateId) => {
    if (clickedState === stateId) {
      // Unclick the same state
      setClickedState(null);
      setIsTableLocked(false);
    } else {
      // Click a different state
      setClickedState(stateId);
      setIsTableLocked(true);
    }
  };

  const unlockTable = () => {
    setClickedState(null);
    setIsTableLocked(false);
    setHoveredState(null);
  };

  return (
    <section className="py-10 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-[15px] font-semibold mb-3">
            <MapPin className="h-4 w-4" />
            State Directory
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Find Numbers by <span className="text-orange-600">Indian States</span>
          </h1>
          <p className="text-lg md:text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            Access state-specific toll-free numbers, emergency services, and government helplines organized by location across India.
          </p>
          <div className="w-24 h-1 bg-orange-400 rounded-full mt-4 mb-2" />
        </div>
      </div>

      {/* Card Container */}
      <div className="max-w-9xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="bg-white/90 rounded-3xl shadow-2xl border border-orange-200 overflow-hidden flex flex-col md:flex-row h-auto md:h-[600px]">
          
          {/* Left column */}
          <div className="flex flex-col px-4 py-8 bg-gradient-to-b from-orange-50 to-white border-r border-orange-100 md:w-[335px] w-full">
            {/* Intro */}
            <div>
              <h2 className="text-2xl font-bold text-orange-700 mb-3">View All Statewise Numbers</h2>
              <p className="text-gray-700 mb-4 text-base">
                Browse the complete directory of helpline and emergency numbers for every Indian state and union territory.
              </p>
              <a
                href="/statewise-numbers"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-base shadow transition"
              >
                <ArrowRight className="h-5 w-5" />
                Browse Statewise Page
              </a>
            </div>

            {/* Stats Container */}
            <div className="flex flex-wrap justify-center gap-5 my-7">
              {stats.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center text-center flex-1 min-w-[90px]">
                  <span className="text-xl font-bold text-orange-600">{s.value}</span>
                  <span className="text-gray-700 text-xs">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <ul className="mt-3 space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2"><span className="text-orange-500">✔</span> 100% verified numbers</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">✔</span> Updated monthly</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">✔</span> Covers all states & UTs</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">✔</span> Emergency & utility contacts</li>
            </ul>
          </div>

          {/* Center column (SVG Map) */}
          <div className="flex flex-col flex-1 bg-transparent p-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-orange-700 text-center flex-1">
                {activeStateData ? `${activeStateData.name} ${clickedState ? '(Locked)' : '(Hovering)'}` : 'Indian States & UTs Emergency Map'}
              </h2>
              {isTableLocked && (
                <button
                  onClick={unlockTable}
                  className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow transition"
                  title="Unlock table"
                >
                  <Unlock className="h-4 w-4" />
                  Unlock
                </button>
              )}
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div
                style={{
                  width: '100%',
                  maxWidth: 530,
                  maxHeight: 510,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '100px',
                }}
              >
                <InteractiveMap
                  onStateHover={handleStateHover}
                  onStateLeave={handleStateLeave}
                  onStateClick={handleStateClick}
                  hoveredState={hoveredState}
                  clickedState={clickedState}
                />
              </div>
            </div>
            <div className="text-center text-sm text-gray-600 mt-2">
              <p>💡 <strong>Tip:</strong> Click on any state to lock the information panel. Hover over other states to compare data.</p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between items-center px-4 py-8 bg-gradient-to-b from-white to-orange-50 border-t md:border-t-0 md:border-l border-orange-100 md:w-[320px] w-full">
            <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-orange-700 sticky top-0 bg-white z-10">
                  {activeStateData ? `${activeStateData.name} Numbers` : 'State Information'}
                </h2>
                {isTableLocked && (
                  <Lock className="h-5 w-5 text-red-500" />
                )}
              </div>
              {activeStateData ? (
                <>
                  <div className="mb-4">
                    <img 
                      src={activeStateData.image} 
                      alt={activeStateData.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                  </div>
                  <table className="w-full text-sm border border-orange-200 rounded-lg overflow-hidden bg-white shadow">
                    <tbody>
                      {activeStateData.info.map((row, idx) => (
                        <tr key={idx} className="even:bg-orange-50 hover:bg-orange-100 transition-colors">
                          <td className="font-semibold pr-2 py-2 text-gray-700 w-1/2 border-b border-orange-100">{row.label}</td>
                          <td className="py-2 text-gray-900 border-b border-orange-100 font-mono">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-500 mt-3">
                    {isTableLocked 
                      ? "Table is locked. Click 'Unlock' or click the same state again to unlock." 
                      : "All numbers are regularly updated and verified for accuracy."
                    }
                  </p>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center text-gray-400 mb-4">
                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    </svg>
                    <span className="text-center">Hover over any state to see emergency numbers and information</span>
                  </div>
                  <table className="w-full text-sm border border-orange-200 rounded-lg overflow-hidden bg-white shadow">
                    <thead>
                      <tr className="bg-orange-100">
                        <th className="py-2 px-2 text-left font-semibold text-orange-700">State</th>
                        <th className="py-2 px-2 text-left font-semibold text-orange-700">CM Helpline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {statesData.slice(0, 5).map((state, idx) => (
                        <tr key={idx} className="even:bg-orange-50 hover:bg-orange-100 transition-colors">
                          <td className="py-2 px-2 text-gray-700">{state.name}</td>
                          <td className="py-2 px-2 text-gray-900 font-mono">{state.info[0]?.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-500 mt-3">Browse any state to see all helpline and emergency numbers.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatewiseSection;
