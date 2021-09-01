import { Heading } from '@chakra-ui/react';
import { AdpTable } from '../../features/adp';

const adp = () => {
  return (
    <div>
      <Heading as="h1" mb={4}>
        Server ADP
      </Heading>
      <AdpTable />
    </div>
  );
};

export default adp;
