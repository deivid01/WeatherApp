import './LoadingSpinner.css';

export const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Carregando dados do clima...</p>
    </div>
  );
};
