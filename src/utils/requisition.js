const requisition = async (url) => {
  console.log(url);
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export default requisition;
