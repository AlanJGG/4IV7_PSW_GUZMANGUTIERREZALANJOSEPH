/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import static java.lang.System.out;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Alumno
 */
public class RegistrarAlumnos extends HttpServlet {
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //definir el constructor
    
    public void init(ServletConfig cfg) throws ServletException{
        //Aquí  se define como se conecta con la base de datos
        String URL = "jdbc:mysql:3306//localhost/alumnos";
                //tipo de conector:manejadorbd:puertomanejador//IP/nombrebd
        String userName = "root";
        String password = "n0m3l0";
        
        try{
            //lo primero es conectarnos
            Class.forName("com.mysql.jdbc.Driver");
            
            URL= "jdbc:mysql://localhost/alumnos";
            con = DriverManager.getConnection(URL,userName, password);
            set = con.createStatement();
            
            System.out.println("Se conectó a la BD");
        }catch(Exception e){
            System.out.println("No se conectó");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        }
    }
     
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet RegistrarAlumnos</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet RegistrarAlumnos at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }
    
    public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet RegistrarAlumnos</title>");            
            out.println("</head>");
            out.println("<body>");
            
            out.println("</body>");
            out.println("</html>");
        try{
            int bol;
            String nom, appat, apmat, tel;
            
            nom = request.getParameter("nombre");
            appat = request.getParameter("appat");
            apmat = request.getParameter("apmat");
            tel = request.getParameter("telefono");
            bol = Integer.parseInt(request.getParameter("boleta"));
            
            //querry
            String q = "insert into alumnobatiz " +
                    "values ("+bol+", '"+nom+"', '"+appat+"', '"+apmat+"', '"+tel+"')";
            
            set.executeUpdate(q);
            out.println("<h1>Registro exitoso</h1>");
            System.out.println("Registro Exitoso");
            }
        
            catch (SQLException e) {
                System.out.println("Error al registrar en la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
                out.println("<h1>Registro No Exitoso");
                
            }
            out.println("<a href='ConsultarAlumnos'>Consultar Alumnos</a>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
