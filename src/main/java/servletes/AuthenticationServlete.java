package servletes;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.*;

import jakarta.servlet.ServletException;

@WebServlet(value="/login")
public class AuthenticationServlete extends HttpServlet {
	
	 private static final long serialVersionUID = 1L;
	
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        if(email.equalsIgnoreCase("Princedre@gmail.com") && password.equals("12345")){
           
            request.getRequestDispatcher("HomePage.html").forward(request, response);
        } else {
           
            request.getRequestDispatcher("index.html").forward(request, response);
        }
    }
}