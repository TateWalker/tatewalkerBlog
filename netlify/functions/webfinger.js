exports.handler = async (event) => {
  const webfingerResponse = {
    subject: "acct:tailscale@tatewalker.com",
    links: [
      {
        "rel": "http://openid.net/specs/connect/1.0/issuer",
        "href": "https://auths2wcjk6tlkg5f8ga.tatewalker.com/o/tailscale"
      }
    ]
  };

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/jrd+json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(webfingerResponse)
  };
};
