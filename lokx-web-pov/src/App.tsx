import React from 'react';
import logo from './logo-adavault.svg';
import './App.css';
import { useState } from 'react';

function MyWallet() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
    alert(`You clicked me ${count} times!`);
  }
  return (
    <button onClick={handleClick}>Load wallet</button>
  );
}

function AssetRow({ asset }) {
  return (
    <tr>
      <td>{asset.assetName}</td>
      <td>{asset.assetConditions}</td>
      <td>{asset.assetRecipient}</td>
      <td>{asset.assetType}</td>
    </tr>
  );
}

function AssetSortableList({ assets }) {
  const rows : any[] = [];
  assets.forEach((asset) => {
    rows.push(
      <AssetRow asset={asset} key={asset.assetName} />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Asset</th>
          <th>Conditions</th>
          <th>Recipient</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function AssetSearchBar() {
  return (
    <div>
    Icon
    <form>
      <input type="text" placeholder="Search..." />
    </form>
    </div>
  );
}

function AssetMainDialog({ assets }) {
  return (
    <div>
      <AssetSearchBar />
      <AssetSortableList assets={assets} />
    </div>
  );
}

function MenuBar() {
  return (
    <div>
      <MyWallet />
    </div>
  );
}


const ASSETS = [
  { assetName: "Child Trust Fund", assetConditions: "30-JUN-2030", assetRecipient: "$MARK", assetType: "ADA" },
  { assetName: "Savings Account", assetConditions: "02-FEB-2027", assetRecipient: "$JOHN", assetType: "ADA" },
  { assetName: "Will and Testament", assetConditions: "Deceased", assetRecipient: "$PARTNER", assetType: "Document" },
  { assetName: "Family Trust Fund", assetConditions: "Deceased", assetRecipient: "$PARTNER", assetType: "BTC" },
  { assetName: "Birth Certificate", assetConditions: "On Demand", assetRecipient: "N/A", assetType: "Document" },
  { assetName: "Passport", assetConditions: "On Demand", assetRecipient: "N/A", assetType: "Document" },
  { assetName: "Driving License", assetConditions: "On Demand", assetRecipient: "N/A", assetType: "Document" },
  { assetName: "Identity Card", assetConditions: "On Demand", assetRecipient: "N/A", assetType: "Document" },
  { assetName: "Deposit", assetConditions: "Escrow", assetRecipient: "Released", assetType: "USDJ" }
];

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div style={{justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <MenuBar />
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
        <AssetMainDialog assets={ASSETS} />
      </div>
    </div>
  )
}