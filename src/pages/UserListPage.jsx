import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import LoadingComponent from '../components/LoadingComponent.jsx';
import { UserCardComponent } from '../components/user/UserCardComponent.jsx';
import { getUsers } from '../services/api';

const UserListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const result = await getUsers();
    setData(result);
    // Apenas para simular uma demora na request para que o loading possa aparecer
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return loading ? (
    <LoadingComponent isLoading={loading} />
  ) : (
    <>
      <Grid container spacing={3}>
        {data.map((info, index) => (
          <UserCardComponent key={index} data={info} />
        ))}
      </Grid>
    </>
  );
};

export default UserListPage;
