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
      const response = await fetch(`${BACKEND_URL}/api/generate-app`, {
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
            onClick={generateApp}
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold py-4 px-6 rounded-xl hover:from-yellow-500 hover:to-pink-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg shadow-lg"
          >
            {loading ? (
              <>
                <Loader2 className="w-6 h-6" />
                Gerando app e criando repositório...
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6" />
                Gerar App Automaticamente
              </>
            )}
          </button>
        </div>

        {result && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-green-400/30">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-400" />
                <div>
                  <h2 className="text-3xl font-bold">🎉 App Criado com Sucesso!</h2>
                  <p className="text-green-200">Repositório criado e GitHub Actions está compilando o APK</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/30 rounded-xl p-6 border border-green-400/20">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    Repositório GitHub:
                  </h3>
                  <a 
                    href={result.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 underline flex items-center gap-2"
                  >
                    {result.repoUrl}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="bg-black/30 rounded-xl p-6 border border-green-400/20">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    GitHub Actions (Compilação):
                  </h3>
                  <a 
                    href={result.actionsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 underline flex items-center gap-2 mb-3"
                  >
                    Ver progresso da compilação
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-sm text-green-100">
                    ⏱️ Tempo estimado: 10-15 minutos
                  </p>
                </div>

                <div className="bg-green-500/20 border border-green-400/50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3">📋 Próximos passos:</h3>
                  <ol className="space-y-2 text-sm text-green-100 list-decimal list-inside">
                    <li>Clique em "Ver progresso da compilação" acima</li>
                    <li>Aguarde o GitHub Actions terminar (~10-15 min)</li>
                    <li>Quando terminar, clique na ação completada</li>
                    <li>Role até "Artifacts" e baixe "app-release"</li>
                    <li>Descompacte o ZIP e terá o APK pronto!</li>
                    <li>Instale no Android e teste o sistema de trial de {trialDays} dias</li>
                  </ol>
                </div>

                <div className="bg-purple-500/20 border border-purple-400/50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3">🔑 Sistema de Trial Integrado:</h3>
                  <ul className="space-y-2 text-sm text-purple-100">
                    <li>✅ Período de teste: {trialDays} dias</li>
                    <li>✅ Banner mostrando dias restantes</li>
                    <li>✅ Bloqueio automático após expiração</li>
                    <li>✅ Tela de ativação de licença</li>
                    <li>✅ Chaves de licença no formato: XXXX-XXXX-XXXX-XXXX</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="font-bold text-lg mb-2">100% Automático</h3>
            <p className="text-sm text-blue-200">GitHub Actions compila o APK na nuvem</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-4xl mb-3">🔐</div>
            <h3 className="font-bold text-lg mb-2">Sistema de Trial</h3>
            <p className="text-sm text-blue-200">Período de teste configurável integrado</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2">Rápido</h3>
            <p className="text-sm text-blue-200">APK pronto em 10-15 minutos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return <AppFactory />;
}
