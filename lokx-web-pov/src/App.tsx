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
      <td style={{padding: '10px'}}>{asset.assetName}</td>
      <td style={{padding: '10px'}}>{asset.assetConditions}</td>
      <td style={{padding: '10px'}}>{asset.assetRecipient}</td>
      <td style={{padding: '10px'}}>{asset.assetType}</td>
    </tr>
  );
}

function AssetSortableList({ assets, assetSearchBarText }) {
  const rows : any[] = [];
  assets.forEach((asset) => {
    if (
      asset.assetName.toLowerCase().indexOf(
        assetSearchBarText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    rows.push(
      <AssetRow asset={asset} key={asset.assetName} />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th style={{padding: '10px'}}>Asset</th>
          <th style={{padding: '10px'}}>Conditions</th>
          <th style={{padding: '10px'}}>Recipient</th>
          <th style={{padding: '10px'}}>Type</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function AssetSearchBar({assetSearchBarText, onAssetSearchBarTextChange}) {
  return (
    <div>
    <form>
      <img src={logo} className="App-logo" alt="logo" />
      <input style={{width: '250px', padding: '5px' }}
        type="text"
        value={assetSearchBarText}
        placeholder="Search Asset..."
        onChange={(e) => onAssetSearchBarTextChange(e.target.value)}/>
    </form>
    </div>
  );
}

function AssetMainDialog({ assets }) {
  const [assetSearchBarText, setAssetSearchBarText] = useState('');
  return (
    <div>
      <AssetSearchBar
        assetSearchBarText={assetSearchBarText}
        onAssetSearchBarTextChange={setAssetSearchBarText}
      />
      <AssetSortableList assets={assets} assetSearchBarText={assetSearchBarText}/>
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
        Under development
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