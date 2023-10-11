export const getPlugins = () => {
  const plugins = localStorage.getItem('plugins');
  if (!plugins) return {"web_search":{"id":"web_search","name":"Web Search","description":"Search for information from the internet","url":"https://websearch.plugsugar.com","logo":"https://websearch.plugsugar.com/200x200.png"}};
  return JSON.parse(localStorage.getItem('plugins') as string);
};

const hasSuffix = (url: string) => {
  const regex = /.*\/\.well-known\/ai-plugin\.json$/;
  return regex.test(url);
};
export const getPluginUrl = (url: string) => {
  const pluginUrl = url.trim();
  const testResult = hasSuffix(pluginUrl);
  if (!testResult) {
    if (pluginUrl.endsWith('/')) {
      return pluginUrl + '.well-known/ai-plugin.json';
    } else {
      return pluginUrl + '/.well-known/ai-plugin.json';
    }
  }
  return pluginUrl;
};
