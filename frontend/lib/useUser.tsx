import useSWR from 'swr';

const useUser = () => {
  // const { data, error } = useSWR('http://localhost:8080/ping');
  const {data, error} = {
    data: "ping",
    error: null
  }

  return {
    data,
    isError: error,
  };
};

export default useUser;
