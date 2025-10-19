
'use client';
import { Sun, Container, Plus } from 'lucide-react';
//This is a workaround to get the icons to show up in the packing list
const LucideIconsForPackingList = () => {
  return (
    <div>
      <Sun />
      <Container />
      <Plus />
    </div>
  );
};
export default LucideIconsForPackingList;
