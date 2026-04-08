package com.blackstonetech.api;

import java.io.*;
import com.sun.net.httpserver.*;
import java.net.InetSocketAddress;
import java.util.*;
import com.google.gson.*;

/**
 * Blackstone Tech Java Backend Server
 * Handles admin functions, reports, and advanced analytics
 */
public class AdminServer {
    private static final int PORT = 8001;
    private static final Gson gson = new Gson();
    
    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
        
        // Register endpoints
        server.createContext("/api/admin/dashboard", new DashboardHandler());
        server.createContext("/api/admin/statistics", new StatisticsHandler());
        server.createContext("/api/admin/reports", new ReportsHandler());
        server.createContext("/api/admin/team", new TeamHandler());
        
        server.setExecutor(null);
        server.start();
        System.out.println("Admin Server running on port " + PORT);
    }
}

/**
 * Dashboard Handler - Returns dashboard statistics
 */
class DashboardHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        if ("GET".equals(exchange.getRequestMethod())) {
            Map<String, Object> response = new LinkedHashMap<>();
            response.put("success", true);
            response.put("data", new LinkedHashMap<String, Object>() {
                {
                    put("totalSales", 15240000);
                    put("ordersToday", 342);
                    put("activeCustomers", 1256);
                    put("satisfaction", 89.5);
                    put("revenue", new LinkedHashMap<String, Object>() {
                        {
                            put("today", 2500000);
                            put("thisWeek", 18500000);
                            put("thisMonth", 75000000);
                        }
                    });
                }
            });
            
            sendResponse(exchange, 200, response);
        } else {
            sendError(exchange, 405, "Method not allowed");
        }
    }
}

/**
 * Statistics Handler - Advanced analytics
 */
class StatisticsHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String period = getQueryParam(exchange, "period", "month");
        
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("success", true);
        response.put("period", period);
        response.put("data", new LinkedHashMap<String, Object>() {
            {
                put("sales", new int[]{5000, 6200, 5900, 7100, 8500, 9200, 10500});
                put("orders", new int[]{45, 52, 48, 61, 73, 89, 102});
                put("customers", new int[]{120, 135, 148, 165, 189, 215, 256});
                put("products", new LinkedHashMap<String, Object>() {
                    {
                        put("CCTV", 42.5);
                        put("Networking", 35.2);
                        put("Software", 18.3);
                        put("Other", 4.0);
                    }
                });
            }
        });
        
        sendResponse(exchange, 200, response);
    }
}

/**
 * Reports Handler - Generate reports
 */
class ReportsHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String reportType = getQueryParam(exchange, "type", "sales");
        
        Map<String, Object> response = new LinkedHashMap<>();
        response.put("success", true);
        response.put("report_type", reportType);
        response.put("generated_at", System.currentTimeMillis());
        response.put("data", generateReport(reportType));
        
        sendResponse(exchange, 200, response);
    }
    
    private Object generateReport(String type) {
        switch(type) {
            case "sales":
                return new LinkedHashMap<String, Object>() {
                    {
                        put("total_sales", 15240000);
                        put("by_category", new LinkedHashMap<String, Integer>() {
                            {
                                put("CCTV", 6480000);
                                put("Networking", 5350000);
                                put("Software", 2790000);
                                put("Other", 620000);
                            }
                        });
                        put("top_products", new Object[]{
                            new LinkedHashMap<String, Object>() {{
                                put("name", "Hikvision DS-2CD2143G0-I");
                                put("sales", 850000);
                                put("units", 45);
                            }},
                            new LinkedHashMap<String, Object>() {{
                                put("name", "TP-Link WiFi 6 Router");
                                put("sales", 450000);
                                put("units", 28);
                            }}
                        });
                    }
                };
            case "inventory":
                return new LinkedHashMap<String, Object>() {
                    {
                        put("total_items", 2500);
                        put("low_stock", 45);
                        put("out_of_stock", 12);
                        put("by_category", new LinkedHashMap<String, Integer>() {
                            {
                                put("CCTV", 1200);
                                put("Networking", 850);
                                put("Software", 450);
                            }
                        });
                    }
                };
            default:
                return new LinkedHashMap<String, String>() {{
                    put("message", "Unknown report type");
                }};
        }
    }
}

/**
 * Team Handler - Team management
 */
class TeamHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        if ("GET".equals(exchange.getRequestMethod())) {
            List<Map<String, Object>> team = new ArrayList<>();
            team.add(new LinkedHashMap<String, Object>() {
                {
                    put("id", 1);
                    put("name", "Edwin Marco Maro");
                    put("position", "CEO & Founder");
                    put("department", "Executive");
                    put("email", "edwin@blackstonetech.tz");
                    put("phone", "+255 677 707 769");
                }
            });
            team.add(new LinkedHashMap<String, Object>() {
                {
                    put("id", 2);
                    put("name", "Tech Manager");
                    put("position", "Technical Lead");
                    put("department", "Engineering");
                    put("email", "tech@blackstonetech.tz");
                    put("phone", "+255 654 123 456");
                }
            });
            
            Map<String, Object> response = new LinkedHashMap<>();
            response.put("success", true);
            response.put("data", team);
            response.put("count", team.size());
            
            sendResponse(exchange, 200, response);
        } else {
            sendError(exchange, 405, "Method not allowed");
        }
    }
}

// Utility methods
class HttpUtil {
    static void sendResponse(HttpExchange exchange, int code, Object data) throws IOException {
        String response = new Gson().toJson(data);
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
        exchange.sendResponseHeaders(code, response.length());
        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }
    
    static void sendError(HttpExchange exchange, int code, String message) throws IOException {
        Map<String, String> error = new LinkedHashMap<>();
        error.put("error", message);
        sendResponse(exchange, code, error);
    }
    
    static String getQueryParam(HttpExchange exchange, String param, String defaultValue) {
        String query = exchange.getRequestURI().getQuery();
        if (query != null && query.contains(param + "=")) {
            String[] params = query.split("&");
            for (String p : params) {
                if (p.startsWith(param + "=")) {
                    return p.substring((param + "=").length());
                }
            }
        }
        return defaultValue;
    }
}
