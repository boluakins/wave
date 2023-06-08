const compareStrings = (a: string, b: string): boolean => {  
    // Convert both strings to sets to eliminate duplicate characters.
    const setA = new Set(a.trim());
    const setB = new Set(b.trim());

    // convert to sorted strings
    const stringA = [...setA].sort().join('');
    const stringB = [...setB].sort().join('');

    return setA.size === setB.size && stringA === stringB;
  }

export default compareStrings;