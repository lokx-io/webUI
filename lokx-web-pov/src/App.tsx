import React from 'react';
import logo from './Lokx-logo.svg';
import iconSettings from './icon-settings.svg';
import './App.css';
import { useState } from 'react';
import { format } from 'path';
import { url } from 'inspector';

function MyWallet() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
    alert(`You clicked me ${count} times!`);
  }
  return (
    <button className="Wallet-button d-block ml-auto" onClick={handleClick}>Connect wallet</button>
  );
} 

function AddAsset() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
    alert(`You clicked me ${count} times!`);
  }
  return (
    <div>
      <button className="Add-button d-block ml-auto mr-0" onClick={handleClick}>Add Asset</button>
    </div>
  );
} 

function AppSettings() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
    alert(`You clicked me ${count} times!`);
  }
  return (
    <div>
      <button type="submit" className="Settings-button d-block mr-60 ml-auto" onClick={handleClick}>
        <img src={iconSettings} alt="Settings" />
      </button>
    </div>
  )
}

function AssetRow({ asset }) {
  return (
    <tr className='Asset-table-row'>
      <td className='Asset-table-d'>{asset.assetName}</td>
      <td className='Asset-table-d'>{asset.assetConditions}</td>
      <td className='Asset-table-d'>{asset.assetRecipient}</td>
      <td className='Asset-table-d'>{asset.assetType}</td>
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
    <div className="Asset-div">
      <table className="Asset-table">
        <thead>
          <tr className='Asset-table-row'>
            <th className='Asset-table-d'>Asset</th>
            <th className='Asset-table-d'>Conditions</th>
            <th className='Asset-table-d'>Recipient</th>
            <th className='Asset-table-d'>Type</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

function AssetSearchBar({assetSearchBarText, onAssetSearchBarTextChange}) {
  return (
    <div className="Search-bar">
      <form>
        <input className="Search-input"
          type="text"
          value={assetSearchBarText}
          placeholder="Search"
          onChange={(e) => onAssetSearchBarTextChange(e.target.value)}/>
      </form>
      <AddAsset />
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
    <div className="Menu-bar">
      <img className="App-logo" src={logo} alt="LOKX.io" />
      <MyWallet />
      <AppSettings />
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
  { assetName: "Deposit", assetConditions: "Escrow", assetRecipient: "$RENTAL", assetType: "USDA" }
];

export default function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body>
        <div>
          <MenuBar />
        </div>
        <div className="Asset-main-dialog">
          <AssetMainDialog assets={ASSETS} />
        </div>
      </body>
    </div>

  )
}