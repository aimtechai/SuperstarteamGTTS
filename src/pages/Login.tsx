import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <SEO title="Login - Go To Traffic School Online" description="Login to your Go To Traffic School Online account" />
      
      {/* Header */}
      {/* <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2 text-right">
          <span className="text-sm text-muted-foreground">📞 1-(888)-329-7069</span>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-6xl mx-auto bg-white shadow-lg">
          <CardHeader className="pb-0">
            {/* Logo Section */}
            <div className="flex items-center gap-4 p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-md flex items-center justify-center">
                <div className="text-white text-2xl font-bold">GT</div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-600">Go To Traffic School Online</h1>
                <p className="text-blue-800 font-semibold">1-(888)-329-7069</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Login Form */}
              <div className="p-8 border-r">
                <div className="max-w-sm mx-auto">
                  <h2 className="text-2xl font-bold text-center mb-8 pb-2 border-b-2 border-blue-600">Login</h2>
                  
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" className="mt-1" />
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      Login
                    </Button>
                    
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3">
                      Sign Up
                    </Button>
                  </form>
                  
                  <div className="mt-6">
                    <p className="text-center text-sm text-muted-foreground mb-4">Or Login with:</p>
                    
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start gap-3 py-3">
                        <span className="text-blue-600">👤</span>
                        Log in with Face ID / Fingerprint
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start gap-3 py-3">
                        <span>🍎</span>
                        Log in with Apple
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start gap-3 py-3">
                        <span className="text-blue-600">G</span>
                        Log in with Google
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start gap-3 py-3">
                        <span className="text-blue-600">f</span>
                        Log in with Facebook
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start gap-3 py-3">
                        <span className="text-blue-600">in</span>
                        Log in with LinkedIn
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start gap-3 py-3">
                        <span className="text-orange-500">⊞</span>
                        Log in with Microsoft
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Information */}
              <div className="p-8 bg-gray-50">
                <div className="space-y-8">
                  {/* Login Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Login</h3>
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>CERTIFICATE PROCESSING TIMELINE:</strong> Certificates of Completion are processed 
                        within 3 business days of your completion or sooner. If you order Same Day 
                        Processing, your certificate will be processed the same day as your completion as 
                        long as you complete your course prior to 3PM PST Monday - Friday. Otherwise, it 
                        will be processed the following business day.
                      </p>
                      
                      <p>
                        <strong>CERTIFICATE SHIPPING TIMES:</strong> Regular and Certified USPS will arrive within 7 - 
                        10 business days of shipment. FedEx shipments are processed Monday - Friday until 
                        3PM PST. Monday - Friday and will be delivered according to the service selected. 
                        Electronic certificate are available, and uploaded according to regular 
                        processing timelines and will be sent to you via email.
                      </p>
                      
                      <p className="font-semibold">
                        YOU MUST SIGNUP FIRST before you can LOGIN.
                      </p>
                    </div>
                  </div>
                  
                  {/* Registration Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">Registration</h3>
                    <p className="text-sm mb-4">
                      Haven't registered yet? please select your site and click the 
                      registration button.
                    </p>
                    
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white text-center py-4 mt-auto">
        <p className="text-sm">
          Copyright © 2025 Go To Traffic School. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Login;