import React, { useState } from 'react';

const Rocket = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const Sparkles = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const Loader2 = ({ className }) => <svg className={className + ' animate-spin'} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>;
const CheckCircle2 = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const Code2 = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const Key = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>;
const Lock = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
const Shield = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const ExternalLink = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>;

// ===== CONFIGURAÇÃO DA SENHA =====
const MASTER_PASSWORD = 'MelGaia2026/@'; // 🔐 MUDE ISSO!

function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (password === MASTER_PASSWORD) {
        onLogin();
      } else {
        setError('Senha incorreta!');
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lock className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Fábrica de Apps</h1>
          <p className="text-blue-200">Área Restrita</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Senha de Acesso:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite a senha"
                className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                disabled={loading}
                autoFocus
              />
              {error && (
                <p className="mt-2 text-red-300 text-sm">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:from-yellow-500 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5" />
                  Verificando...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Entrar
                </>
              )}
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-500/20 border border-blue-400/50 rounded-xl">
            <p className="text-sm text-blue-100 text-center">
              🔐 Acesso restrito a usuários autorizados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppFactory() {
  const [appIdea, setAppIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [trialDays, setTrialDays] = useState(5);
  const [claudeApiKey, setClaudeApiKey] = useState('');

  const BACKEND_URL = 'https://fabrica-apps-backend.onrender.com';

  const generateApp = async () => {
    if (!appIdea.trim()) {
      setError('Por favor, descreva a ideia do seu app!');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`${BACKEND_URL}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appIdea,
          trialDays,
          claudeApiKey
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setResult(data);
      } else {
        setError(data.error || 'Erro ao gerar app. Tente novamente.');
      }
    } catch (err) {
      setError('Erro na conexão com o servidor. Verifique sua conexão e tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-12 h-12 text-yellow-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Fábrica de Apps PRO
            </h1>
          </div>
          <p className="text-xl text-blue-200 mb-2">
            APKs gerados automaticamente com sistema de trial integrado
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/50 rounded-full px-4 py-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm font-semibold">GitHub Actions</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/50 rounded-full px-4 py-2">
              <Lock className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-semibold">Trial Automático</span>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 mb-8">
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              Descreva seu app:
            </label>
            <textarea
              value={appIdea}
              onChange={(e) => setAppIdea(e.target.value)}
              placeholder="Ex: App de delivery de marmitas fitness com menu, carrinho de compras, sistema de pedidos..."
              className="w-full h-40 px-4 py-3 bg-white/5 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              disabled={loading}
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold mb-3 flex items-center gap-2">
              <Key className="w-5 h-5 text-purple-400" />
              Chave da API Claude (Opcional):
            </label>
            <input
              type="password"
              value={claudeApiKey}
              onChange={(e) => setClaudeApiKey(e.target.value)}
              placeholder="Deixe vazio para usar a chave do servidor"
              className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              disabled={loading}
            />
            <p className="text-sm text-blue-200 mt-2">
              💡 Deixe vazio para usar a chave configurada no servidor
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-lg font-semibold mb-3 flex items-center gap-2">
              <Key className="w-5 h-5 text-purple-400" />
              Período de teste (dias):
            </label>
            <select
              value={trialDays}
              onChange={(e) => setTrialDays(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white/5 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              disabled={loading}
            >
              <option value={3}>3 dias</option>
              <option value={5}>5 dias (recomendado)</option>
              <option value={7}>7 dias</option>
              <option value={10}>10 dias</option>
              <option value={15}>15 dias</option>
              <option value={30}>30 dias</option>
            </select>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200">
              {error}
            </div>
          )}

          <button
            onClick={gener
