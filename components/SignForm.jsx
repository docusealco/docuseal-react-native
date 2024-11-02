import { WebView } from 'react-native-webview';

export default function SignForm({ route }) {
  const { slug, email } = route.params

  return (
    <WebView
      source={{ html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.docuseal.com/js/form.js"></script>
          </head>
          <body>
            <docuseal-form style="height: 100vh" data-src="https://docuseal.com/d/${slug}" data-email="${email}">
              Loading...
            </docuseal-form>
          </body>
        </html>
      ` }}
    />
  );
}
