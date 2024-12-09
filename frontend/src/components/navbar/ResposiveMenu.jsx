import { motion, AnimatePresence } from "framer-motion";

/* eslint-disable react/prop-types */
function ResposiveMenu({ open }) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen  z-20"
        >
          <div className="text-xl font-semibold m-6 bg-blue-400 rounded-3xl py-8">
            <ul className="flex flex-col justify-center items-center gap-4">
              <li>Home</li>
              <li>Vehicles</li>
              <li>Services</li>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Login/SignUp</li>
              <li>Dark Mode</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResposiveMenu;
