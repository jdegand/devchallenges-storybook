import './App.css';
import { useState } from 'react';
import { Button } from './stories/Button';
import cart from './stories/assets/cart-plus.svg';
import { Sidebar } from './stories/Sidebar';
import { Input } from './stories/Input';

const image = {
  src: cart,
  alt: 'Add to Cart',
};

function App() {

  return (
    <main>
      <Sidebar />
      <section>
        <h1>Buttons</h1>
        <div className="flex-evenly">
          <div>
            <h3>&lt;Button&nbsp;&nbsp;/&gt;</h3>
            <Button background="default" />
          </div>
          <div>
            <h3>&:hover, &:focus</h3>
            <Button background="default-hover" color="#4f4f4f" />
          </div>
        </div>
        <div className="flex-evenly">
          <div>
            <h3>&lt;Button&nbsp;variant="outline"&nbsp;/&gt;</h3>
            <Button background="outline" color="#2962ff" />
          </div>
          <div>
            <h3>&:hover, &:focus</h3>
            <Button background="hover-outline" color="#2962ff" />
          </div>
        </div>
        <div className="flex-evenly">
          <div>
            <h3>&lt;Button&nbsp;variant="text"&nbsp;/&gt;</h3>
            <Button background="text" color="#2962ff" disableShadow={true} />
          </div>
          <div>
            <h3>&:hover, &:focus</h3>
            <Button background="hover-text" color="#2962ff" disableShadow={true} />
          </div>
        </div>
        <div>
          <h3>&lt;Button&nbsp;disableShadow&nbsp;/&gt;</h3>
          <Button background="primary" color="#fff" disableShadow={true} />
        </div>
        <div className="flex-evenly">
          <div>
            <h3>&lt;Button&nbsp;disabled&nbsp;/&gt;</h3>
            <Button background="default" color="#a5a5a5" disabled={true} label="Disabled" />
          </div>
          <div>
            <h3>&lt;Button&nbsp;variant="text"&nbsp;disabled&nbsp;/&gt;</h3>
            <Button background="text" color="#a5a5a5" disabled={true} label="Disabled" />
          </div>
        </div>
        <div className="flex-evenly">
          <div>
          <h3>&lt;Button&nbsp;startIcon="local_grocery_store"&nbsp;/&gt;</h3>
            <Button background="primary" color="#fff" startIcon={image.src} alt={image.alt} />
          </div>
          <div>
          <h3>&lt;Button&nbsp;endIcon="local_grocery_store"&nbsp;/&gt;</h3>
            <Button background="primary" color="#fff" endIcon={image.src} alt={image.alt} />
          </div>
        </div>
        <div className="flex-evenly">
          <div>
            <h3>&lt;Button&nbsp;size="sm"&nbsp;/&gt;</h3>
            <Button background="primary" color="#fff" size="small" />
          </div>
          <div>
            <h3>&lt;Button&nbsp;size="md"&nbsp;/&gt;</h3>
            <Button background="primary" color="#fff" size="medium" />
          </div>
          <div>
            <h3>&lt;Button&nbsp;size="lg"&nbsp;/&gt;</h3>
            <Button background="primary" color="#fff" size="large" />
          </div>
        </div>
        <div className="flex-evenly">
          <div>
          <h3>&lt;Button&nbsp;color="default"&nbsp;/&gt;</h3>
            <Button />
          </div>
          <div>
          <h3>&lt;Button&nbsp;color="primary"&nbsp;/&gt;</h3>
            <Button background="primary" color="#fff" />
          </div>
          <div>
          <h3>&lt;Button&nbsp;color="secondary"&nbsp;/&gt;</h3>
            <Button background="secondary" color="#fff" />
          </div>
          <div>
          <h3>&lt;Button&nbsp;color="danger"&nbsp;/&gt;</h3>
            <Button background="danger" color="#fff" />
          </div>
        </div>
        <div className="flex-evenly">
          <div>
            <h3>&:hover, &:focus</h3>
            <Button background="default-hover" color="#4f4f4f" />
          </div>
          <div>
            <h3>&:hover, &:focus</h3>
            <Button background="hover-primary" color="#cfdaf5" />
          </div>
          <div>
            <h3>&:hover, &:focus</h3>
            <Button background="hover-secondary" color="#b9bfc2" />
          </div>
          <div>
            <h3>&:hover, &:focus</h3>
            <Button background="hover-danger" color="#e2b8b9" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;