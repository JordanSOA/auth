package fr.formation.jwtsecuredserver.controllers;

import fr.formation.jwtsecuredserver.services.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.formation.jwtsecuredserver.config.ResourceServerConfig;

import java.util.Collections;
import java.util.Map;

/**
 * @see ResourceServerConfig#configure(HttpSecurity)
 */

@RestController
@RequestMapping("/private")
public class PrivateController {
    @Autowired
    private CustomUserDetailsService userDetailsService;
    /**
     * Accessible with "ROLE_USER".
     *
     * @return "Hello user!"
     */
    @PreAuthorize("hasRole('USER')") // == @Secured("ROLE_USER")
    @GetMapping(value = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, String> user() { return Collections.singletonMap("response","Hello user!");
    }

    /**
     * Accessible with "ROLE_ADMIN".
     *
     * @return "Hello admin!"
     */
    @PreAuthorize("hasRole('ADMIN')") // == @Secured("ROLE_ADMIN")
    @GetMapping(value = "/admin", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, String> admin() {
	return Collections.singletonMap("response","Hello admin!");
    }

    /**
     * Accessible if fully authenticated (not anonymous).
     *
     * @return "Hello fully authenticated!"
     */
    @GetMapping("/authenticated")
    public String secured() {
	return "Hello fully authenticated!";
    }
}
