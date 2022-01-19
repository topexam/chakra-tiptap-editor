import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';

import { WebEditor } from '../.';

const App = () => {
  return (
    <ChakraProvider>
      <Box m={20}>
        <WebEditor placeholderText="This is placeholder" />
      </Box>
      <Box m={20}>
        <WebEditor hasToolbar={false} placeholderText="This is placeholder" />
      </Box>
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
