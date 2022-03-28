/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql. *;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletConfig;
/**
 *
 * @author Alumno
 */
public class ConsultarAlumnos extends HttpServlet {

    /* Para que se pueda conectar con la BD es necesario un constructor, se necesitan 3 tipos de objetos para poder establecer la conexión.
       Connection que establece la conexión con el servidor de la BD
       Statement que sirve para poder definir las sentencias de manipulacion y definicion de datos (create, update, insert, delete)
       ResultSet que sirve para poder crear querrys*/
    
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
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Lista de alumnos de batiz</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Tabla de la lista de Alumnos</h1>"
                    + "<table border=2>"
                    + "<tr>"
                        + "<th>Boleta</th>"
                        + "<th>Nombre del Alumno</th>"
                        + "<th>Telefono</th>"
                    + "</tr>");
        try{
            int boleta;
            String nombre, apellidopaterno, apellidomaterno, tel;
            
            String q = "select * from alumnobatiz";
            
            set = con.createStatement();
            rs = set.executeQuery(q);
            
            while(rs.next()){
                boleta = rs.getInt("boleta");
                nombre = rs.getString("nombre");
                apellidopaterno = rs.getString("appat");
                apellidomaterno = rs.getString("apmat");
                tel = rs.getString("telefono");
                
                out.println("<tr>"
                            +"<td>"+boleta+"</td>"
                            +"<td>"+nombre+" "+apellidopaterno+" "+apellidomaterno+"</td>"
                            +"<td>"+tel+"</td>");
                
                rs.close();
                set.close();
            }
        
        }   catch (SQLException ex) {
                System.out.println("Error al conectar");
                System.out.println();
                System.out.println();
            }
            out.println("</body>");
            out.println("</html>");
        }
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
