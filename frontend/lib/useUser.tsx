import useSWR from 'swr';

const useUser = () => {
  const { data, error } = useSWR('http://localhost:8080/ping');

  return {
    data,
    isError: error,
  };
};

export default useUser;
