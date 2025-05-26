import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ConfigProvider } from 'antd';
import { GlobalStyle } from './styles/GlobalStyle';
import { message } from 'antd';

message.config({
  top: 900,
  duration: 3,
  maxCount: 1, 
});

function App() {
  return (
    <ConfigProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
