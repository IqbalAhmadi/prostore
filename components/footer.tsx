import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const curentYear = new Date().getFullYear();
    return ( <footer className="border-t">
        <div className="p-5 flex-center">
            <p>&copy; {curentYear} {APP_NAME}. All rights reserved.</p>
        </div>
    </footer> );
}
 
export default Footer;