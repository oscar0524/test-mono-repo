import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Menubar } from 'primereact/menubar';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
import { RootState, AppDispatch } from '../store';
import { fetchHealth } from '../store/slices/healthSlice';
import styles from './app.module.css';

export function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { status, message, loading, error } = useSelector(
    (state: RootState) => state.health
  );

  const menuItems = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => (window.location.hash = '#/'),
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      command: () => (window.location.hash = '#/about'),
    },
  ];

  const handleCheckHealth = () => {
    dispatch(fetchHealth());
  };

  return (
    <div className={styles.app}>
      <Menubar model={menuItems} />

      <div className={styles.container}>
        <Routes>
          <Route
            path="/"
            element={
              <div className={styles.page}>
                <Card title="Welcome to the Monorepo" className={styles.card}>
                  <p className={styles.description}>
                    This is a modern monorepo with:
                  </p>
                  <ul className={styles.features}>
                    <li><i className="pi pi-check-circle" /> Spring Boot 4.1.0 WebFlux (Kotlin, Java 21)</li>
                    <li><i className="pi pi-check-circle" /> React with TypeScript</li>
                    <li><i className="pi pi-check-circle" /> Redux with Redux-Observable (Epic)</li>
                    <li><i className="pi pi-check-circle" /> RxJS for reactive programming</li>
                    <li><i className="pi pi-check-circle" /> PrimeReact UI components</li>
                    <li><i className="pi pi-check-circle" /> PostgreSQL database</li>
                    <li><i className="pi pi-check-circle" /> Nx for monorepo management</li>
                  </ul>

                  <div className={styles.healthCheck}>
                    <h3>Backend Health Check</h3>
                    <Button
                      label="Check Backend Health"
                      icon="pi pi-refresh"
                      onClick={handleCheckHealth}
                      loading={loading}
                      className="p-button-rounded"
                    />

                    {loading && (
                      <div className={styles.loading}>
                        <ProgressSpinner />
                      </div>
                    )}

                    {error && (
                      <Message
                        severity="error"
                        text={error}
                        className={styles.message}
                      />
                    )}

                    {status && !loading && (
                      <Message
                        severity="success"
                        text={`Status: ${status} - ${message}`}
                        className={styles.message}
                      />
                    )}
                  </div>
                </Card>
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className={styles.page}>
                <Card title="About" className={styles.card}>
                  <p>
                    This monorepo demonstrates modern full-stack development
                    with reactive programming patterns.
                  </p>
                  <p>
                    <Link to="/">
                      <Button label="Go to Home" icon="pi pi-home" />
                    </Link>
                  </p>
                </Card>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
