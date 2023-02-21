function calculateCarpet() {
  
  let room1Width = getRoomWidth(1);
  let room1Length = getRoomLength(1);
  let room1Area = room1Length * room1Width;

  let room2Width = getRoomWidth(2);
  let room2Length = getRoomLength(2);
  let room2Area = room2Length * room2Width;

  let totalArea = room1Area + room2Area;
  totalArea += totalArea * 0.1  //adds the 10% to the total area
  showResult(totalArea)
  
}