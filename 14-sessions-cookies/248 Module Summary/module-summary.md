# Module Summary Notes: Cookies vs. Sessions

## Cookies

- **Client-Side Storage**:
  - Cookies are used for storing data on the client side, within the browser.
- **Security Concerns**:
  - Sensitive data should **not** be stored in cookies as they can be easily viewed and manipulated by the user.
- **Expiry Configuration**:
  - Cookies can be set to expire either when the browser is closed (referred to as "Session Cookie") or after a certain age or specific expiry date (referred to as "Permanent Cookie").
- **Complementary to Sessions**:
  - Cookies work well in conjunction with sessions, often being used to store session identifiers.

## Sessions

- **Server-Side Storage**:
  - Sessions store data on the server, not on the client side.
- **Ideal for Sensitive Data**:
  - Sessions are suitable for storing sensitive data that needs to persist across multiple requests.
- **Versatility**:
  - Almost anything can be stored within a session, offering flexibility for developers.
- **Common Uses**:
  - Often used for maintaining user data and authentication status across a session.
- **Identification via Cookie**:
  - Sessions are typically identified using a cookie. This cookie contains the session ID, which the server uses to retrieve the stored session data. This should not be confused with the term "Session Cookie" used for cookies that expire when the browser is closed.
- **Flexible Storage Options**:
  - Sessions can be saved in various types of storage systems on the server, depending on the requirements of the application.

## Summary

- **Cookies** are best for storing non-sensitive, short-lived data directly on the client's browser. They are simple but should not be trusted with critical information due to their visibility and ease of manipulation.
- **Sessions** offer a more secure and versatile way to store sensitive data on the server, ensuring persistence across multiple client requests. The session data is identified via a session ID stored in a client-side cookie, linking client requests to their corresponding session data on the server.
