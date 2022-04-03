import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';

import { WebEditor } from '../.';

const App = () => {
  return (
    <ChakraProvider>
      <Box p={10} bg="gray.50">
        <Box m={20}>
          <WebEditor
            value={{ html: '<p>Hello</p>' }}
            onChange={(value) => console.log(value)}
          />
        </Box>
        <Box m={20}>
          <WebEditor
            hasToolbar={false}
            value={{ html: '<p>Hello</p>' }}
            onChange={(value) => console.log(value)}
          />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
