import React, { useState, useEffect } from 'react';
import axios from 'axios';

// custom hook for performing GET request
export const useFetch = (searchMethod, searchValue) => {
  let param = 0;

  if (searchValue !== undefined) param = searchValue;

  const getAll = 'http://jdbc:mysql://aws-jump.cua9gycvhvc2.us-east-2.rds.amazonaws.com:3306/spring_db//api/students';
  const getById = 'http://jdbc:mysql://aws-jump.cua9gycvhvc2.us-east-2.rds.amazonaws.com:3306/spring_db//api/student/' + param;
  let url = null;

  switch (searchMethod) {
    case 'getById': url = getById;
      break;
    case 'getAll': url = getAll;
      break;
    default: url = null;
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
          console.log('Date fetched! -> ' + response.data);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data };
};

export function createStudent(student) {
  return axios.post('http://jdbc:mysql://aws-jump.cua9gycvhvc2.us-east-2.rds.amazonaws.com:3306/spring_db//api/add/student', student);
}

export function updateStudent(student) {
  console.log('in the upate service');
  return axios.put('http://jdbc:mysql://aws-jump.cua9gycvhvc2.us-east-2.rds.amazonaws.com:3306/spring_db//api/update/student', student);
}

export function deleteStudent(studentId) {
  return axios.delete('http://jdbc:mysql://aws-jump.cua9gycvhvc2.us-east-2.rds.amazonaws.com:3306/spring_db//api/delete/student/' + studentId);
}




