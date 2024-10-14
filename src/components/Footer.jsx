export const Footer = () => (
  <footer className="fixed bottom-0 left-0 w-full bg-sky-700 text-white">
    <div className="flex justify-between items-center w-full px-4 py-2">
      <p>&copy; 2024 Mystery Number. All rights reserved.</p>
      <div className="flex items-center">
        <p className="mr-4">Connect with us on-</p>
        <ul className="social-icons flex space-x-4">
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel=" noopener noreferrer"
            >
              <img src="/instagram.gif" alt="Instagram" className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/tiktok.gif" alt="TikTok" className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/twitter.gif" alt="Twitter" className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/facebook-circled.gif"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
