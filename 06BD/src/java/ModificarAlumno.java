/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Alan Guzmán
 */
public class ModificarAlumno extends HttpServlet {

    private Connection con;
    private Statement set;
    private ResultSet rs;
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
     public void init(ServletConfig cfg) throws ServletException{
        //aqui es donde se define como se conecta a la BD
        String URL = "jdbc:mysql:3306//localhost/alumnos";
                    //tipo de conector:manejadorbd:puerto//IP/nombrebd
        String userName = "root";
        String password = "n0m3l0";
        
        try{
            //lo primero es conectarnos
            Class.forName("com.mysql.jdbc.Driver");
            
            URL = "jdbc:mysql://localhost/alumnos";
            
            con = DriverManager.getConnection(URL, userName, password);
            set = con.createStatement();
            
            System.out.println("Se conecto a la BD *w* ");
        }catch(Exception e){
            
            System.out.println("No se conecto, solo juguito contigo");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        
        }
    
    }
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
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
        processRequest(request, response);
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
            out.println("<title>Modificación de un Alumno</title>");            
            out.println("</head>");
            out.println("<body>");
            
            try{
                //vamos a registrar en la bd (insert)
                int bol, bolNuev;
                String nom, appat, apmat, tel;
                
                //es obtener los parametros
                nom = request.getParameter("nombre");
                appat = request.getParameter("appat");
                apmat = request.getParameter("apmat");
                tel = request.getParameter("tel");
                bolNuev = Integer.parseInt(request.getParameter("boletaNuev"));
                bol = Integer.parseInt(request.getParameter("boleta"));
                
                //querry
                if(request.getParameter("boleta") != "" ){
                    if(request.getParameter("boletaNuev") != ""){
                        String q = "update alumnobatiz set boleta='"+ bolNuev + "' where boleta="+bol; 
                        set.executeUpdate(q);
                        System.out.println("Se modificó la bolta del alumno");
                    } else if(nom != ""){
                        String q = "update alumnobatiz set nombre='"+ nom + "' where boleta="+bol; 
                        set.executeUpdate(q);
                        System.out.println("Se modificó el nombre del alumno");
                    } else if(appat != ""){
                        String q = "update alumnobatiz set appat='"+ appat + "' where boleta="+bol;
                        set.executeUpdate(q);
                        System.out.println("Se modificó el apellido paterno del alumno");
                    }else if(apmat != ""){
                        String q = "update alumnobatiz set apmat='"+ apmat + "' where boleta="+bol;
                        set.executeUpdate(q);
                        System.out.println("Se modificó el apellido materno del alumno");
                    }else if(tel != ""){
                        String q = "update alumnobatiz set tel='"+ tel + "' where boleta="+bol;
                        set.executeUpdate(q);
                        System.out.println("Se modificó el teléfono del alumno");
                    }else{
                    out.println("<h1>No ingresó ningún dato</h1>");
                    }
                } else{
                    out.println("<h1>No ingresó ningun número de boleta</h1>");
                }
            }catch(Exception e){
                
                System.out.println("Error al modificar");
                out.println("<h1>Modificación No Exitosa</h1>");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            }
            
            
            
            out.println("<a href='ConsultarAlumnos' >Consultar Alumnos</a>");
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

public void destroy(){
        try{
            con.close();
        }catch(Exception e){
            super.destroy();
        }
    }
}
