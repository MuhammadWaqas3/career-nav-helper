
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Building2, ArrowRight, GraduationCap } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample university data (In a real app, this would come from an API/database)
const universities = {
  engineering: [
    { name: "NUST", location: "Islamabad", ranking: 1, fee: "250,000/semester" },
    { name: "UET Lahore", location: "Lahore", ranking: 2, fee: "180,000/semester" },
    { name: "GIKI", location: "Topi", ranking: 3, fee: "350,000/semester" },
  ],
  computerScience: [
    { name: "FAST-NUCES", location: "Multiple", ranking: 1, fee: "220,000/semester" },
    { name: "COMSATS", location: "Multiple", ranking: 2, fee: "160,000/semester" },
    { name: "ITU", location: "Lahore", ranking: 3, fee: "200,000/semester" },
  ],
  medical: [
    { name: "AKU", location: "Karachi", ranking: 1, fee: "400,000/semester" },
    { name: "KE", location: "Karachi", ranking: 2, fee: "150,000/semester" },
    { name: "AIMC", location: "Lahore", ranking: 3, fee: "180,000/semester" },
  ],
  business: [
    { name: "IBA", location: "Karachi", ranking: 1, fee: "280,000/semester" },
    { name: "LUMS", location: "Lahore", ranking: 2, fee: "350,000/semester" },
    { name: "CBM", location: "Karachi", ranking: 3, fee: "200,000/semester" },
  ],
};

interface ComparisonData {
  name: string;
  fee: string;
  jobSuccess: string;
  alumniNetwork: string;
  brandRanking: string;
}

const UniversitiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [uni1, setUni1] = useState("");
  const [uni2, setUni2] = useState("");
  const [comparison, setComparison] = useState<{
    uni1: ComparisonData | null;
    uni2: ComparisonData | null;
  } | null>(null);

  const handleCompare = () => {
    // In a real app, this would fetch data from an API
    setComparison({
      uni1: {
        name: uni1,
        fee: "250,000/semester",
        jobSuccess: "92%",
        alumniNetwork: "50,000+",
        brandRanking: "Top 3",
      },
      uni2: {
        name: uni2,
        fee: "180,000/semester",
        jobSuccess: "88%",
        alumniNetwork: "35,000+",
        brandRanking: "Top 10",
      },
    });
  };

  const filteredUniversities = (category: keyof typeof universities) =>
    universities[category].filter((uni) =>
      uni.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold text-secondary mb-4">
              Universities in Pakistan
            </h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search universities..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* University Comparison Section */}
          <div className="mb-12 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-heading text-2xl font-semibold text-secondary mb-4">
              Compare Universities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder="First University"
                value={uni1}
                onChange={(e) => setUni1(e.target.value)}
              />
              <Input
                placeholder="Second University"
                value={uni2}
                onChange={(e) => setUni2(e.target.value)}
              />
            </div>
            <Button 
              onClick={handleCompare}
              className="w-full md:w-auto"
              disabled={!uni1 || !uni2}
            >
              Compare <ArrowRight className="ml-2" />
            </Button>

            {comparison && (
              <div className="mt-6 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Criteria</TableHead>
                      <TableHead>{comparison.uni1?.name}</TableHead>
                      <TableHead>{comparison.uni2?.name}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Semester Fee</TableCell>
                      <TableCell>{comparison.uni1?.fee}</TableCell>
                      <TableCell>{comparison.uni2?.fee}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Job Success Rate</TableCell>
                      <TableCell>{comparison.uni1?.jobSuccess}</TableCell>
                      <TableCell>{comparison.uni2?.jobSuccess}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Alumni Network</TableCell>
                      <TableCell>{comparison.uni1?.alumniNetwork}</TableCell>
                      <TableCell>{comparison.uni2?.alumniNetwork}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Brand Ranking</TableCell>
                      <TableCell>{comparison.uni1?.brandRanking}</TableCell>
                      <TableCell>{comparison.uni2?.brandRanking}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            )}
          </div>

          {/* University Listings */}
          <Tabs defaultValue="engineering" className="space-y-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="computerScience">Computer Science</TabsTrigger>
              <TabsTrigger value="medical">Medical</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>

            {Object.entries(universities).map(([category, _]) => (
              <TabsContent key={category} value={category} className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>University</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Ranking</TableHead>
                        <TableHead>Fee Structure</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUniversities(category as keyof typeof universities).map((uni, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{uni.name}</TableCell>
                          <TableCell>{uni.location}</TableCell>
                          <TableCell>#{uni.ranking}</TableCell>
                          <TableCell>{uni.fee}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UniversitiesPage;
