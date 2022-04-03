import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';

import { WebEditor } from '../.';

const App = () => {
  return (
    <ChakraProvider>
      <Box p={10} bg="gray.50">
        <Box m={20}>
          <WebEditor />
        </Box>
        <Box m={20}>
          <WebEditor hasToolbar={false} />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
