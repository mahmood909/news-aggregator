import './App.css';
import { Box, Container } from '@mui/material'
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <Container style={{ padding: 16 }}>
      <Box>
        <Dashboard />
      </Box>
    </Container>
  );
}

export default App;
