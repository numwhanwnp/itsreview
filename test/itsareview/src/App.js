import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/box'
import data from './data/test.js';

function App() {
  return (
    <div className="App">
      <div className="contianer">
        {/* <table>
          <tr>
            <td><Box title="เสื้อผ้าผู้ชาย" img="https://cf.shopee.co.th/file/1e038265632e2fe45f8f518e87f90be5" /></td>
            <td><Box title="มือถือและอุปกรณ์เสริม" img="https://images.samsung.com/is/image/samsung/th/galaxy-fold/gallery/th-galaxy-fold-sm-f900-sm-f900fzsdthl-frontsilver-thumb-158324303?$PF_PRD_PNG$" /></td>
            <td><Box title="อาหารเสริมและผลิตภัณฑ์สุขภาพ" img="https://cf.shopee.co.th/file/816849df9d6b3b10656f04c0b5953165" /></td>
          </tr>
        </table> */}
      </div>

      {data.map (function(x,index){
        return <td><Box title={x.title} img={x.img} key={index} /></td>
      })};
    </div>
  );
}
export default App;