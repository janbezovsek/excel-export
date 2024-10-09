import {} from 'react';
import ExcelExport from './ExcelExport';

const data = [
  { id: 1, name: 'John Doe', age: 30, profession: 'Developer' },
  { id: 2, name: 'Jane Smith', age: 25, profession: 'Designer' },
  { id: 3, name: 'John Terry', age: 35, profession: 'footballer' },
  { id: 4, name: 'Mike Smith', age: 20, profession: 'Blacksmith' },
  { id: 5, name: 'Jack Black', age: 31, profession: 'Actor' },
  { id: 6, name: 'Sarah Smith', age: 28, profession: 'Fashion Designer' },
  { id: 7, name: 'Jennifer Aniston', age: 26, profession: 'Actor' },
  { id: 8, name: 'Sophia Dereck', age: 24, profession: 'Dancer' },
  { id: 9, name: 'Courtney Fox', age: 23, profession: 'Cheerleader' },
  { id: 10, name: 'John Boe', age: 30, profession: 'Bartender' },
];

const App = () => {
  return (
    <div>
      <h1>Export Data to Excel</h1>
      <ExcelExport data={data} fileName="employees" />
    </div>
  );
}

export default App;