package fr.formation.jwtsecuredserver.config;

import org.springframework.beans.factory.annotation.Value;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CorsFilter implements Filter {

    private String allowOrigin;

    public CorsFilter(String allowOrigin){
        this.allowOrigin = allowOrigin;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {

        HttpServletResponse response = (HttpServletResponse) servletResponse;
        response.setHeader("Access-Control-Allow-Origin", allowOrigin );
        response.setHeader("Access-Control-Allow-Credentials",  "true");
        response.setHeader("Access-Control-Allow-Headers", "Authorization , x-requested-with");
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            filterChain.doFilter(servletRequest,servletResponse);
        }
    }
}
