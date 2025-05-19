import { useState, useEffect } from 'react';

const useMenusetup = (resid) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    if (resid) {
      fetchMenu();
    }
  }, [resid]);

  async function fetchMenu() {
    try {
      const response = await fetch(
        `/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resid}&submitAction=ENTER`
      );
      const json = await response.json();
      console.log("Fetched menu:", json);
      setMenu(json.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  }

  return menu;
};

export default useMenusetup;

