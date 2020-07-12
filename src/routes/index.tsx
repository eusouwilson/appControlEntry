import React from 'react';
import { useAuth } from '../contexts/auth';
import AuthRoutes from './auth.routes';
import AdminRoutes from './admin.routes';
import OperatorRoutes from './operator.routes';

const Routes: React.FC = () => {
  const { signed, user } = useAuth();

  return signed && user?.type === 'admin' ? (
    <AdminRoutes />
  ) : signed && user?.type !== 'admin' ? (
    <OperatorRoutes />
  ) : (
    <AuthRoutes />
  );
};

export default Routes;
