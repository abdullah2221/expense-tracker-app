import './App.css';
import Child from './Child';
import "../node_modules/bootstrap/scss/bootstrap.scss"
import "bootstrap/dist/js/bootstrap.bundle"
import { TransactionProvider } from './transContext';
function App() {
  return (
  <>
  <TransactionProvider>
  
  <Child/>
  </TransactionProvider>
  
  
  </>
  );
}

export default App;
