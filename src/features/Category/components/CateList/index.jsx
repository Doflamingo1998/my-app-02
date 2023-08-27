import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import categoryApi from '../../../../api/categoryApi';

CateList.propTypes = {
  cateList: PropTypes.array,
};

function CateList() {

  const [cateList, setCateList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {

      const categoryList = await categoryApi.getAll();

      setCateList(categoryList);
      
    };
  
    fetchProducts();
  }, []);

  return (
    <ul>
      {cateList.map((cate) => (
        <li key={cate.id}>{cate.name}</li>
      ))}
    </ul>
  );
}
export default CateList;
