export const getPlugins = () => {
  const plugins = localStorage.getItem('plugins');
  if (!plugins) return {"BrowserOp":{"id":"BrowserOp","name":"BrowserOp","description":"Browse dozens of webpages in one query. Fetch information more efficiently.","url":"https://openapi-af.op-mobile.opera.com/openapi/testplugin/.well-known/ai-plugin.json","logo":"https://openapi-af.op-mobile.opera.com/openapi/testplugin/.well-known/logo.png"},"web_search":{"id":"web_search","name":"Web Search","description":"Search for information from the internet","url":"https://websearch.plugsugar.com","logo":"https://websearch.plugsugar.com/200x200.png"},"access_link":{"id":"access_link","name":"Access Link","description":"Access any links on the web and get the information you need.","url":"https://www.accesslinks.ai/.well-known/ai-plugin.json","logo":"https://www.accesslinks.ai/.well-known/logo.png"},"pdfreader":{"id":"pdfreader","name":"PDF Reader","description":"Access and chat with PDF links. This allows you to ask questions, summarize, simplify, or rewrite the PDF content.","url":"https://pdfreader.maila.ai/.well-known/ai-plugin.json","logo":"https://pdfreader.maila.ai/.well-known/logo.png"},"mindful_data_ai":{"id":"mindful_data_ai","name":"MindfulDataAI","description":"Search with Google. You can search the web with Google when you are asking a question about something recent.","url":"https://chatgpt-plugin.mindfuldataai.com/.well-known/ai-plugin.json","logo":"https://chatgpt-plugin.mindfuldataai.com/logo.png"},"Diagrams":{"id":"Diagrams","name":"Diagrams","description":"Create and display diagrams from kroki.io or using networkx and matplotlib.","url":"https://diagrams.herokuapp.com","logo":"https://diagrams.herokuapp.com/static/logo.png"}};
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
