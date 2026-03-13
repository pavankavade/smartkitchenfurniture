export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{
      '--theme-color': '#5D4037',
      '--theme-color-light': '#5D403726',
      '--theme-color-dark1': '#4E342E',
      '--theme-color-dark2': '#3E2723',
      '--theme-color-dark3': '#2d1f1b',
    } as React.CSSProperties}>
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700,900" />
        <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Smart Kitchen & Furniture - Digital Business Card" />
        <title>Smart Kitchen & Furniture - Digital Business Card</title>
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
