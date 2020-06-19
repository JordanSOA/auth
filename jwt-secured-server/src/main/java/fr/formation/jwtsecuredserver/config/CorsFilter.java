package fr.formation.jwtsecuredserver.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter {
    @Value("${api-cors.allowOrigin}")
    private String allowOrigin;

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {

        HttpServletResponse response = (HttpServletResponse) servletResponse;
        response.setHeader("Access-Control-Allow-Origin", allowOrigin );
        response.setHeader("Access-Control-Allow-Credentials",  "true");
        response.setHeader("Access-Control-Allow-Headers", "Authorization , x-requested-with");
        //x-xsrf-token,x-auth-token ?
        /*
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
        } else {
            filterChain.doFilter(servletRequest,servletResponse);
        }
         */
        filterChain.doFilter(servletRequest,servletResponse);
    }
}
